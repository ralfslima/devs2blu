# Especifica a versáo do Node (Alpine serve para criar imagens Docker de maneira mais leve)
FROM node:20-alpine

# Copia apenas os arquivos necessários
COPY package*.json ./
RUN npm install

# Copia os demais arquivos (como pessoas.json)
COPY . .

# Expõe a porta padrão do json-server
EXPOSE 3000

# Comando para iniciar o json-server com seu arquivo db.json
CMD ["npx", "json-server", "--host", "0.0.0.0", "--port", "3000", "--watch", "db.json"]
