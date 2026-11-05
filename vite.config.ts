import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      // dev only: /compute-stud -> /compute-stud/ (production uses vercel.json)
      name: "compute-stud-slash",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/compute-stud") {
            res.statusCode = 302
            res.setHeader("Location", "/compute-stud/")
            res.end()
            return
          }
          next()
        })
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
})
