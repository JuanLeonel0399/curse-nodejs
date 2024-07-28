# API

# que hace el protocolo http => 
#            Del (usuario) se envia  -> request(peticion) => url, header, methoda, body 
#                      Al (servidor) -> server(servidor procesar) 
#    Y el servidor Envia a (usuario) -> response(respuesta) => statusCode, headers, body 

# status codes => los estados de las peticiones y respuestas (http.cat => para ver cada status explicado)
# 100-199 => respuestas informativas
# 200-299 => respuestas sastifactorias
# 300-399 => redirecciones
# 400-499 => errores del clientes
# 500-599 => errores del servidor

# Los mas comunes => 
# (200 ok), 
# (301 Movido permanente (redirecciona)), 
# (400 bad request(la peticion no es correcta)), 
# (401 no autorizado), 
# (402 metodo de pago requerido), 
# (403 peticion prohibida), 
# (404 no encontro la peticion), 
# (500 error interno del servidor)


# Metodos
# GET => solicita(request) una representacion del recurso especificado. recuperan datos (es el que hace por defecto)
# HEAD => pide una respuesta identica a una peticiion get, pero sin el cuerpo de la respuesta(response).
# POST => envia una entidad al recurso especificado, provocando a menudo un cambio de estado o efectos secundarios en el servidor
# PUT => sustituye todas las representaciones actuales del recurso de destino por la carga util de la solicitud(request)
# DELETE => elimina el recurso especificado
# CONNECT => estbalece un tunel hacia el servidor identificado por el recurso de destino.
# OPTIONS => describe las opciones de comunicacion para el recurso de destino
# TRACE => realiza una prueba de bucle-retorno de mensaje a lo largo de la ruta hacia el recurso de destino
# PATH => aplica modificaciones parciales a un recurso

# URI => Uniform Resource Indicator (cuál es el DNI del recurso?)
# URN => Uniform Resource Name (cómo se llama el recurso?)



# URL Y ENDPOINTS
# URL => Uniform Resource Locator (dónde está el recurso?)
# ENDPOINT => Punto específico para llamar el recurso. (hacer el request)
# PD: Dentro de toda una URL se puede encontrar los Endpoints

# ESTRUCTURA DE URL => PROTOCOLO (HTTP://, HTTPS://) SUBDOMINIO(BLOG) DOMINIO(EXAMPLE) DOMINIO TLD(.COM) SUBCARPETA(SUBTOPIC) SLUG(BLOG-POST)
# https://blog.example.com/subtopic/blog-post 
# ENDPOINT EN UNA URL => (backlog?quickFilter=13&issueLimit=100) ENDPOINT(backlog) VARIABLES(?quickFilter=13&issueLimit=100)
# https://blog.example.com/subtopic/backlog?quickFilter=13&issueLimit=100