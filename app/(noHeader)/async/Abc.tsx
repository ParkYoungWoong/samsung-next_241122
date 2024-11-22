export default async function Abc() {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return <h1>Abc</h1>
}
