import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { ToneOfVoice } from '../components/toneOfVoice'
import { Menu } from '../components/menu'
import { IAPIResponse } from '../interfaces'
import { tones } from '../constants'

const textResponse: NextPage = () => {
  const [tone, setTone] = useState(tones[0]);
  const [recipientName, setRecipientName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [content, setContent] = useState("");

  const [spin, setSpin] = useState(false);

  const [emailResult, setEmailResult] = useState({} as IAPIResponse);

  const onTextChange = (e: any) => {
    setContent(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  const onRecipientName = (e: any) => {
    setRecipientName(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  const onRelationship = (e: any) => {
    setRelationship(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  const onContent = (e: any) => {
    setContent(e.currentTarget.value);
    console.log(e.currentTarget.value);
  }

  const onSubmit = async(e: any): Promise<void> => {
    setSpin(true);
    e.preventDefault();
    const data = {
      tone: tone.text,
      recipientName,
      relationship,
      content
    }
    const res = await fetch('/api/text', { method: "POST", body: JSON.stringify(data) });
    const email = await res.json();
    setEmailResult(email);
    setSpin(false);
  }



  return (
    <div className={`flex min-h-screen flex-col items-center justify-center ${spin && "animate-ping"}`}>
      <Head>
        <title>Text Response</title>
      </Head>

      <Menu />

      <h1 className="text-6xl font-bold mt-20 animate-bounce">
          What's{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            the{' '}
          </a>
          Craic?
        </h1>

      <main className="flex w-full flex-1 flex-row items-center justify-center text-center mb-32">
      <div className="max-w-md w-96 space-y-8 px-2">
          <div>
            <img className="mx-auto h-12 w-auto hover:animate-spin" src="https://dogecoin.com/assets/img/doge.png" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Give us the deets</h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={onSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="recipient-name" className="sr-only">Recipient Name</label>
                <input
                  id="recipient-name"
                  name="recipient"
                  type="text"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none hover:resize-y"
                  placeholder="Give us their name"
                  onChange={onRecipientName}
                  value={recipientName}
                />
              </div>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="relationship" className="sr-only">What's your relationship?</label>
                <input
                  id="relationship"
                  name="relationship"
                  type="text"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none hover:resize-y"
                  placeholder="Mother? Brother? Sister? Lover?"
                  onChange={onRelationship}
                  value={relationship}
                />
              </div>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="text-conv" className="sr-only">Text Conversation</label>
                <textarea
                  id="text-conv"
                  name="text-conv"
                  rows={6}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none hover:resize-y"
                  placeholder="What they sayin?"
                  onChange={onContent}
                  value={content}
                />
              </div>
            </div>
            <div>
              <ToneOfVoice onChange={setTone} value={tone} />
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Gimme Gimme Gimme
              </button>
            </div>
          </form>
        </div>

      <div className="w-1/2 px-2">
      <textarea
                  id="email-address"
                  name="email"
                  rows={12}
                  className="mt-28 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none hover:resize-y"
                  placeholder=""
                  onChange={onTextChange}
                  value={emailResult.text}
                />
      </div>
      </main>

      <footer className="flex h-10 w-full items-center justify-center border-t">
        Powered by PowerPoint Presentations®
      </footer>
    </div>
  )
}

export default textResponse
