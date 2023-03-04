function loadWindow(html, css, js) {
            let styleToAdd = document.createElement('style')
            let scriptToAdd = document.createElement('script')
            let newWindow = window.open("", "newWindow")

            let newestHTML

            scriptToAdd.type = 'text/javascript'

            let scriptContents = document.createTextNode(js)
            let styleContents = document.createTextNode(css)

            scriptToAdd.appendChild(scriptContents)
            styleToAdd.appendChild(styleContents)

            newWindow.document.write(html)
            newWindow.document.head.appendChild(scriptToAdd)
            newWindow.document.head.appendChild(styleToAdd)
            newWindow.document.close()
        }
