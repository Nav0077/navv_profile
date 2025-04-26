// ContactSection.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("Failed to send message.")
      }
    } catch (error) {
      setStatus("Something went wrong.")
    }
  }

  return (
    <section id="contact" className="py-20 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold">Contact Me</h2>
        </motion.div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-white/10 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-white/10 focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-white/10 focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center mt-6 text-white/80">{status}</p>
        )}
      </div>
    </section>
  )
}
