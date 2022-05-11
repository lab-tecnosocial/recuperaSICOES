library(tidyverse)
library(rJava)
library(tabulizer)
library(rlist)

# cargar lista de archivos a procesar
files <- list.files("./fichas", full.names = T)
cuces <- list.files("./fichas") %>%
  str_sub(end = -5)

# extraer tabla de lista de PDFs
tab <- lapply(files, extract_tables, method = "lattice")

# encontrar listas mayores a 2 para arreglarlas
long <- sapply(tab, length)
indices <- which(long > 2)
len <- long[long > 2]

limpiar <- cbind(indices, len)

# arreglar
limpiar_tab <- tab[limpiar[ , 1]]
files1 <- paste0("./fichas2/", names(limpiar_tab), ".pdf")
tab_arreglado <- lapply(files1, extract_areas)

lista_df <- lapply(tab, function(x) as_tibble(x[[2]]))
# eliminar primera y ultima fila y luego añadir columna cuce
for (i in 1:length(lista_df)) {
  lista_df [[i]] <- slice(lista_df[[i]], c(-1, NROW(lista_df[[i]]) * -1))
  lista_df[[i]] <- mutate(lista_df[[i]], cuce = cuces[i])
}

# eliminar por indices las tablas no reconocidas
lista_df_clean <- lista_df[-indices]

# convertir lista de matrices a data frames
fichas_df <- map_dfr(lista_df_clean, as_tibble)

# mover columnas y renombrar
fichas_df <- fichas_df %>%
  relocate(cuce) %>%
  select(-V17)
colnames(fichas_df) <- colnames(fichas1)

fichas_df_clean <- fichas_df %>% 
  filter(str_length(código_unspsc) == 7)

fichas_df_clean <- slice(fichas_df_clean, -(1473))

