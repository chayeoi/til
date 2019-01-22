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
