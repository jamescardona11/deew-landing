import React from 'react'

import { Container } from '@/components'

import Discord from '../public/icons/discord.svg?inline'
import Linkedin from '../public/icons/linkedin.svg?inline'

export const Contacts = () => {
  async function handleOnSubmit(e) {
    console.log('Email Sent ')
    console.log(e.currentTarget.elements)
    e.preventDefault()
    const formData = {}
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return
      formData[field.name] = field.value
    })

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
  }
  return (
    <Container className="bg-white" id="contact">
      <div
        className={
          'bg-gradient-to-b from-[#645cff] to-[#671AE4] rounded-xl py-10 px-5 flex items-center justify-center shadow-lg flex-col'
        }
      >
        <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center">
          Listo para iniciar
        </h2>
      </div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p className="max-w-xl text-lg text-gray-700">
                Si tienes alguna pregunta o alguna inquietud antes de iniciar un procedo con nosotros, puedes ponerte en
                contacto con nosotros por medio de este formulario.
              </p>

              <div className="mt-8">
                <p className="text-2xl font-bold text-primary-500">Contáctanos:</p>
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form action="" onSubmit={handleOnSubmit} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Nombre
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg text-black"
                    placeholder="Name"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg text-black"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Teléfono
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg text-black"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    className="w-full p-3 text-sm border-gray-200 rounded-lg text-black"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium"> Enviar consulta </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
