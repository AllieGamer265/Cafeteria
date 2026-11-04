import { Icon } from './Icon'

interface NightSummaryProps {
  day: number
  served: number
  dayEarnings: number
  dayStars: number
  coins: number
  onShop: () => void
  onSleep: () => void
}

export function NightSummary({
  day,
  served,
  dayEarnings,
  dayStars,
  coins,
  onShop,
  onSleep,
}: NightSummaryProps) {
  return (
    <div className="night-screen">
      <div className="night-stars" aria-hidden="true" />
      <div className="night-moon" aria-hidden="true" />

      <section className="receipt" aria-label={`Resumen del día ${day}`}>
        <header className="receipt-header">
          <div className="receipt-mark">
            <Icon name="coffee" size={28} />
          </div>
          <h1>CAFÉ NIDO</h1>
          <p>Día {day} completado</p>
        </header>

        <div className="receipt-lines">
          <div>
            <span>Pedidos servidos</span>
            <span>{served}/5</span>
          </div>
          <div>
            <span>Estrellas del día</span>
            <span>{dayStars}</span>
          </div>
          <div>
            <span>Ganancias</span>
            <span>{dayEarnings} monedas</span>
          </div>
          <div>
            <span>Gastos</span>
            <span>0 monedas</span>
          </div>
          <div className="receipt-total">
            <span>Total del día</span>
            <span>{dayEarnings} monedas</span>
          </div>
          <div className="receipt-balance">
            <span>Monedas actuales</span>
            <span>
              <Icon name="coin" size={14} /> {coins}
            </span>
          </div>
        </div>

        <div className="receipt-stamp">DÍA COMPLETADO</div>

        <div className="receipt-actions">
          <button className="cn-button" onClick={onShop}>
            <Icon name="shop" size={16} /> Ir a la tienda
          </button>
          <button className="cn-button cn-button--secondary" onClick={onSleep}>
            <Icon name="moon" size={16} /> Dormir
          </button>
        </div>

        <p className="receipt-footer">Buen café, gran café.</p>
      </section>
    </div>
  )
}
