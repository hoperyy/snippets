单行文字截取

```css
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```

多行文字截取

```css
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient: vertical;
overflow: hidden;
```