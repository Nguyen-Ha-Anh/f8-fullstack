import { ProviderI , useContext } from "react"
import { Context } from "./page"

export default function () {

  const injector: ProviderI = useContext(Context)
  const { question } = injector
  console.log('Description', question)

  return (
    <>
      <h1>Description</h1>
      <p>
        {
          question.description
        }
      </p>
    </>
  )
}