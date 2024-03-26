export default function Results({ results}) {
  return (
    <div>
        {
            results.map((result) => (
                <div hey={result.id}>
                    <h2>{result.original_title}</h2>
                </div>
            ))
        }
    </div>
  )
}
