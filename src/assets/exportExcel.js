import './blob'
import XLSX from 'xlsx'
import saveAs from 'file-saver'
// 获取在线表格数据
function generateArray(table) {
    let out = []
    let rows = table.querySelectorAll('tr')
    let ranges = []
    for (let R = 0; R < rows.length; ++R) {
        // let outRow = []
        let row = rows[R]
        let columns = row.querySelectorAll('td')
        let outRow=getOutRowAndRanges(columns,ranges,R)
        out.push(outRow)
    }
    // 表格有可能用了th做头部
    let thead=rows[0].querySelectorAll('th')
    let theadData=getOutRowAndRanges(thead,ranges,0)
    theadData.length && (out[0]=theadData)
    return [out, ranges]
}
//获取每一行的值和合并值
function getOutRowAndRanges(columns,ranges,R) {
    let outRow = []
    for (let C = 0; C < columns.length; ++C) {
        let cell = columns[C]
        let colspan = cell.getAttribute('colspan')
        let rowspan = cell.getAttribute('rowspan')
        let cellValue = cell.innerText.toString()
        ranges.forEach(function(range) {
            if (R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
                for (let i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null)
            }
        })
        //Handle Row Span
        if (rowspan || colspan) {
            rowspan = rowspan || 1
            colspan = colspan || 1
            ranges.push({
                s: {
                    r: R,
                    c: outRow.length
                },
                e: {
                    r: R + rowspan - 1,
                    c: outRow.length + colspan - 1
                }
            })
        }
        //Handle Value
        outRow.push(cellValue !== "" ? cellValue.toString() : null)
        //Handle Colspan
        if (colspan){
            for (let k = 0; k < colspan - 1; ++k) outRow.push(null)
        }
    }
    //ranges是传递进来的，不需要反出
    return [...outRow]
}
// 时间格式函数
function datenum(v, date1904) {
    if (date1904) v += 1462
    let epoch = Date.parse(v)
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000)
}
// 生成excel表数据
function sheet_from_array_of_arrays(data, opts) {
    let ws = {}
    let range = {
        s: {
            c: 10000000,
            r: 10000000
        },
        e: {
            c: 0,
            r: 0
        }
    }
    for (let R = 0; R !== data.length ;++R) {
        for (let C = 0; C !== data[R].length ;++C) {
            if (range.s.r > R) range.s.r = R
            if (range.s.c > C) range.s.c = C
            if (range.e.r < R) range.e.r = R
            if (range.e.c < C) range.e.c = C
            let cell = {
                v: data[R][C]
            }
            if (cell.v == null) continue
            let cell_ref = XLSX.utils.encode_cell({
                c: C,
                r: R
            })

            if (typeof cell.v === 'number') cell.t = 'n'
            else if (typeof cell.v === 'boolean') cell.t = 'b'
            else if (cell.v instanceof Date) {
                cell.t = 'n'
                cell.z = XLSX.SSF._table[14]
                cell.v = datenum(cell.v)
            } else cell.t = 's'

            ws[cell_ref] = cell
        }
    }
    if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range)
    return ws
}
// 工作表重置为空
function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook()
    this.SheetNames = []
    this.Sheets = {}
}
// 获取buffer
function getBuffer(s) {
    let buf = new ArrayBuffer(s.length)
    let view = new Uint8Array(buf)
    for (let i = 0; i !== s.length ;++i) view[i] = s.charCodeAt(i) & 0xFF
    return buf
}
// 将在线表格table表格转换成excel
export function export_table_to_excel(id,title) {
    let theTable = document.getElementById(id)
    let [out, ranges] = generateArray(theTable)
    let ws_name = "SheetJS"
    let wb = new Workbook(),
        ws = sheet_from_array_of_arrays(out)
    ws['!merges'] = ranges
    wb.SheetNames.push(ws_name)
    wb.Sheets[ws_name] = ws
    let wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary'
    })
    saveAs(new Blob([getBuffer(wbout)], {
        type: "application/octet-stream"
    }), (title || '表格')+".xlsx")
}
// 将json数据转换成excel
export function export_json_to_excel(th, data, defaultTitle) {
    data.unshift(th)
    let ws_name = "SheetJS"
    let wb = new Workbook(),
        ws = sheet_from_array_of_arrays(data)
    wb.SheetNames.push(ws_name)
    wb.Sheets[ws_name] = ws
    let wbout = XLSX.write(wb, {
        bookType: 'xlsx',
        bookSST: false,
        type: 'binary'
    })
    let title = defaultTitle || '列表'
    saveAs(new Blob([getBuffer(wbout)], {
        type: "application/octet-stream"
    }), title + ".xlsx")
}
