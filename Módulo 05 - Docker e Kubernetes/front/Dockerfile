# Build da aplicação Angular usando Node.js
FROM node:20-alpine AS builder

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências para instalar as libs
COPY package*.json ./

# Instala as dependências do projeto (npm install)
RUN npm install

# Copia todos os arquivos do projeto para dentro do container
COPY . .

# Executa o build da aplicação Angular em modo produção
RUN npm run build --prod

# Servir o app Angular usando NGINX (servidor web leve)
FROM nginx:alpine

# Copia os arquivos gerados na etapa de build para o diretório padrão do NGINX
COPY --from=builder /app/dist/front /usr/share/nginx/html

# Copia um arquivo de configuração customizado para o NGINX (opcional, para SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 para acesso externo
EXPOSE 80

# Comando para iniciar o NGINX em primeiro plano
CMD ["nginx", "-g", "daemon off;"]