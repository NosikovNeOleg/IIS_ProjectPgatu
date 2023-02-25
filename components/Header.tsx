

export default function Header() {
    const header_string = "Экспертная система по выбору технологии программирования и программных средств для разработки программного продукта";
    return (
            <div className="header">
                <h1 className="text-center text-2xl font-mono">{header_string}</h1>
            </div>
            )
}