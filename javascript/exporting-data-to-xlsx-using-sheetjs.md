# SheetJS를 활용하여 데이터를 액셀 형식으로 내보내기

## 방법 1

```javascript
import XLSX from 'xlsx'

const data = [
  { name: 'John', city: 'Seattle' },
  { name: 'Mike', city: 'Los Angeles' },
  { name: 'Zach', city: 'New York' },
]

const worksheet = XLSX.utils.json_to_sheet(data)
const workbook = XLSX.utils.book_new()

XLSX.utils.book_append_sheet(workbook, worksheet, 'People')

XLSX.writeFile(wb, 'sheetjs.xlsx')
```

## 방법 2

```javascript
const data = [
  ['name', 'city', 'age'],
  ['Lee', 'Busan', 15],
  ['Kim', 'Seoul', 30],
  ['Yoon', 'Incheon', 27],
]

const worksheet = XLSX.utils.aoa_to_sheet(data)
const workbook = XLSX.utils.book_new()

XLSX.utils.book_append_sheet(workbook, worksheet, 'People')

XLSX.writeFile(workbook, 'people.xlsx')
```

## 셀 병합하기

```javascript
import XLSX from 'xlsx'
import { saveAs } from 'file-saver'

const data = [
  ['Merged', '', 'C', 'D'],
  [1, 2, 3, 4],
  ['a', 'b', 'c', 'd']
]

/* Merge cells A1:B1 */
const merge = { s: { r: 0, c: 0 }, e: { r: 0, c: 1 } }
// const merge = XLSX.utils.decode_range('A1:B1') // this is equivalent

/* Generate worksheet */
const worksheet = XLSX.utils.aoa_to_sheet(data)

/* Add merges */
if (!ws['!merges']) { ws['!merges'] = [] }
ws['!merges'].push(merge)

/* Generate workbook */
const workbook = XLSX.utils.book_new()
XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet1')

/* Generate file and download */
const workbookOutput = XLSX.write(workbook, { type: 'array', bookType: 'xlsx' })
saveAs(new Blob([workbookOutput], { type: 'application/octet-stream' }), 'example.xlsx')
```

## 참고 문서

* [merge cells from Array of Arrays - ShetJS/js-xlsx](https://github.com/SheetJS/js-xlsx/issues/964)

