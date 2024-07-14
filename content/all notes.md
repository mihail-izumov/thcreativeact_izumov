---
title: Заметки
draft: false
tags: 
link: notes
---
```dataview 
Table 
rows.file.link AS "Публикация"
From "content/Заметки" 
Where contains(status, "published") 
SORT number(split(file.name, "\.")[0]) ASC, number(split(file.name, "\.")[1]) ASC, number(split(file.name, "\.")[2]) ASC
GROUP BY date AS "Дата публикации"
```

---
_Раздел дополняется_