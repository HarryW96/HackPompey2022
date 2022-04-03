import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { Menu } from '../components/menu'
import { ToneOfVoice } from '../components/toneOfVoice'
import { tones } from '../constants'
import { IAPIResponse } from '../interfaces'

const Email: NextPage = () => {
  const [content, setContent] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [emailResult, setEmailResult] = useState({} as IAPIResponse);
  const [spin, setSpin] = useState(false);

  const onTextChange = (e: any) => {
    setContent(e.currentTarget.value);
  }

  const onSubmit = async(e: any): Promise<void> => {
    setSpin(true);
    e.preventDefault();
    const data = {
      tone: tone.text,
      content,
    }
    const res = await fetch('/api/email', { method: "POST", body: JSON.stringify(data) });
    const email = await res.json();
    setEmailResult(email);
    setSpin(false);
  }

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center bg-white md:px-28 lg:px-32 ${spin && "animate-spin"}`}>
      <Head>
        <title>Email</title>
      </Head>

      <Menu />

      <h1 className={`text-6xl font-bold mt-20 animate-bounce ${spin && "animate-ping"}`}>
        What's troubling{' '}
        <a className={`text-indigo-500`}>
          y
        </a>
        <a className={`text-yellow-500`}>
          o
        </a>
        <a className={`text-red-500`}>
          u
        </a>
        <a className={`text-green-500`}>
          ?
        </a>
      </h1>

      <main className="flex w-full flex-1 flex-row items-center justify-center text-center mb-32">
        <div className="max-w-md space-y-8 w-1/2 px-4">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">What up</h2>
          </div>
          <form className="mt-8 space-y-4" action="#" method="POST" onSubmit={onSubmit}>
            <div className={`rounded-md shadow-sm -space-y-px ${spin && "animate-ping"}`}>
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <textarea
                  id="email-address"
                  name="email"
                  rows={8}
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm resize-none hover:resize-y"
                  placeholder="Give us the email content"
                  onChange={onTextChange}
                  value={content}
                />
              </div>
            </div>
            <div>
              <ToneOfVoice onChange={setTone} value={tone} />
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Generate email
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2 h-full px-4">
          <textarea
            id="email-address"
            name="email"
            rows={16}
            className={`mt-20 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none sm:text-sm resize-none hover:resize-y ${spin && "animate-ping"}`}
            placeholder="Give us the email content"
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

export default Email
