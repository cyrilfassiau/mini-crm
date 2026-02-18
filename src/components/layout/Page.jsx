export default function Page({ children }) {
  return (
    <main className="page">
      <div className="page__inner">
        {children}
      </div>
    </main>
  )
}