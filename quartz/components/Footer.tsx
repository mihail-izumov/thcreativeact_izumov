import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}> 
        <p><b><a href="https://t.me/izumov" target="_blank">Телеграм-канал</a></b>      <b><a href="/credits" target="_blank">Информация о сайте</a></b>      <b><a href="mailto:izumov@thecreativeact.ru" target="_blank">Контакт</a></b></p>
        <b><a href="/docs/oferta" target="_blank">Оферта</a></b> <b><a href="/docs/politic" target="_blank">Политика конфиденциальности</a></b>
        <b><a href="https://thecreativeact.ru" target="_blank">Чудесная Гостиная</a></b>
        <p>© 2024 Михаил Изюмов</p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
