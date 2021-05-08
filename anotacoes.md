#Anotações do projeto node-rest-api

######Classes de códigos HTTP:
* 100~199: Respostas de informação;
* 200~299: Rspostas de sucesso;
* 300~399: Redirecionamentos;
* 400~499: Erros do cliente;
* 500~599: Erros do servidor.

Por padrão, o Nest retorna 201 para POST e 200 para os demais, quando há sucesso. Para especificar um código de retorno no Nest, usamos o decorator @HttpCode(valor).