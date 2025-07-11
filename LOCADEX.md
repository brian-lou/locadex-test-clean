# 🌐 Locadex i18n

Este repositorio está configurado para usar Locadex para internacionalización automatizada.

## Configuración:

- **Directorio de Trabajo**: `.`
- **Prefijo de Rama**: `locadex/`
- **Configuraciones Regionales Configuradas**: `es`
- **Traducciones Locales**: Habilitado

## Cómo funciona:

- Locadex analizará automáticamente tu código en busca de contenido traducible cada vez que abras un PR
- Locadex modificará tu comando de compilación para generar automáticamente traducciones de tu contenido en las configuraciones regionales que hayas configurado
- Locadex enviará sus cambios a tu rama de PR, los cuales puedes revisar y fusionar

## Próximos Pasos:
1. **Obtener claves de API**: Visita [General Translation Dashboard](https://dash.generaltranslation.com) para generar claves de API
2. **Agregar claves de API**: Agrega una Clave de API de Producción y un ID de Proyecto a tu flujo de trabajo de CI del proyecto para mantener tus traducciones actualizadas
3. En desarrollo, usar una Clave de API de Desarrollo te permitirá recargar en caliente las traducciones en tu aplicación mientras realizas cambios

---

Generado por [Locadex](https://generaltranslation.com) • [Documentation](https://generaltranslation.com/docs)
