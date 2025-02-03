FROM "node"
WORKDIR "/opt/user-balance-manager"
COPY . ./
# COPY package*.json .
# RUN npm i
EXPOSE "3000"
CMD ["sleep", "infinity"]
