# Política

## Uso de Ramas

| Rama            | Uso                         |
| :---------------: | --------------------------- |
| feature         | Para realizar el desarrollo de una funcionalidad en específico. |
| dev             | Integración de nuevas funcionalidades desarrolladas. |
| qas             | Ejecución de planes de prueba y de calidad. Requiere Pull Request con aprobación. |
| hotfix          | Derivado de incidentes productivos y requiere corregir de forma inmediata. Se realiza Pull Request a main/master directamente. |
| main            | Se utiliza para los cambios productivos. Es indispensable realizar las aprobaciones correspondientes del **Operador**. Requiere Pull Request con aprobación |
| main (merge)    | Para el e-comerce en Liverpool, se realizará el pase a la rama de master / main a través de `MERGE` cuando se publique a **sitio cerrado.**  |
| main (tag)      | Para el e-comerce en Liverpool, se realizará el pase a la rama de master / main a través de `TAG` cuando se publique a **sitio abierto.** | 

## Nomenclatura de Ramas

La estructura de la nomenclatura de las ramas debe ser la siguiente:
```
[dev|qas|hotfix|main/master]  
|__ R##S##  
|__________ /feature/R##S##_IDSTORY 
```

**Donde:**

- `R##`: Número de release
- `S##`: Número de sprint
- `IDSTORY`: ID de historia en Jira o Proyecto

**NOTA:** En caso de ser `ID de Proyecto`, considerar que coincida con la cantidad de caracteres usados por Jira (6 caracteres)

### Ejemplo: 

```
dev  
|__ /R0704  
|_________ /feature/R0704_AAJ-179
```
