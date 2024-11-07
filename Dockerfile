FROM oven/bun

WORKDIR /src/app

COPY . .

RUN bun install

EXPOSE 3000

CMD ["bun", "dev", "-H 0.0.0.0"]