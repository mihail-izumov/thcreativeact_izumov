import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
}

header h1 {
  margin: 0;
  flex: auto;
}
`

export default (() => Header) satisfies QuartzComponentConstructor

<script>
// запрет правой кнопки мышки
    document.onmousedown = function (e) {
        e = e || window.event;
        var b = (e.which ? (e.which < 2) : (e.button < 2));
        if (!b)return false;
    };
    document.oncontextmenu = function (e) {
        return false
    };

// запрет выделения мышкой и комбинаций клавиш Ctrl + A, Ctrl + U и Ctrl + S
    function preventSelection(e) {
        var preventSelection = false;

        function addHandler(e, event, handler) {
            if (e.attachEvent) e.attachEvent('on' + event, handler);
            else if (e.addEventListener) e.addEventListener(event, handler, false);
        }

        function removeSelection() {
            if (window.getSelection) {
                window.getSelection().removeAllRanges();
            }
            else if (document.selection && document.selection.clear)
                document.selection.clear();
        }

// запрещаем выделять текст мышкой
        addHandler(e, 'mousemove', function () {
            if (preventSelection) removeSelection();
        });
        addHandler(e, 'mousedown', function (e) {
            e = e || window.event;
            var sender = e.target || e.srcElement;
            preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
        });

// запрещаем нажатие клавищ Ctrl + A, Ctrl + U и Ctrl + S
        function killCtrlA(e) {
            e = e || window.e;
            var sender = e.target || e.srcElement;
            if (sender.tagName.match(/INPUT|TEXTAREA/i)) return;
            var key = e.keyCode || e.which;
            if ((e.ctrlKey && key == 'U'.charCodeAt(0)) || (e.ctrlKey && key == 'A'.charCodeAt(0)) || (e.ctrlKey && key == 'S'.charCodeAt(0)))  // 'A'.charCodeAt(0) можно заменить на 65
            {
                removeSelection();
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
        }

        addHandler(e, 'keydown', killCtrlA);
        addHandler(e, 'keyup', killCtrlA);
    }
    preventSelection(document);
</script>
