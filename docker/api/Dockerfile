FROM node:22 as builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build


FROM node:22-alpine as runner
ENV NODE_ENV=production

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main.js"]