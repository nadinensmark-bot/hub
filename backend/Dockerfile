FROM node:20-alpine
WORKDIR /app
COPY backend/package.json ./backend/
RUN cd backend && npm install --omit=dev
COPY backend ./backend
COPY navigator/kb.js navigator/kb-en.js navigator/vyzvy.js ./navigator/
EXPOSE 8787
CMD ["node", "backend/server.js"]
