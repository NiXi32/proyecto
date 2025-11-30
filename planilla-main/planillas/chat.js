document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const icon = document.getElementById('chatbot-icon');
    const window = document.getElementById('chatbot-window');
    const messagesContainer = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    // Mostrar/ocultar ventana
    icon.addEventListener('click', function() {
        window.classList.toggle('visible');
    });

    // Respuestas del bot (catastro)
const botResponses = {
// Saludos y respuestas basicas
    "hola": "¡Hola! 👋 Soy el asistente virtual de SIAMsoft ¿En que puedo ayudarte hoy?\n\n• Planillas\n• Control de asistencia\n• Reportes\n• Configuracion",
    "buenos dias": "¡Buenos dias! ☀️ ¿Necesitas ayuda con tu sistema de planillas o control de asistencia?",
    "buenas tardes": "¡Buenas tardes! 🌤️ ¿En que puedo asistirte con el software de RH?",
    "gracias": "¡De nada! 😊 ¿Hay algo mas en lo que pueda ayudarte?",
    "si": "¡deacuerdo! 😊 ¿ dentro de un momento te brindaremos mas infomracion?",
    "adios": "¡Hasta luego! 👋 Recuerda que estoy aqui para ayudarte con tu sistema de planillas y asistencia.",

    // Planillas y nomina
    "planilla": "📊 **¿Que es un Sistema de Planillas y como beneficia a tu organizacion?**\n\nUna planilla es el corazon de la administracion salarial que automatiza:\n\n🔵 **Funcionamiento tecnico**:\n1. _Base de datos centralizada_: Integra informacion laboral, financiera y tributaria\n2. _Motor de calculo_: Aplica formulas preconfiguradas para salarios, descuentos y beneficios\n3. _Ciclo automatizado_: Desde la captura de asistencia hasta el pago y generacion de reportes\n\n🟢 **Beneficios clave**:\n✓ **Precision**: Elimina errores humanos en calculos complejos (ej: horas extras acumuladas)\n✓ **Cumplimiento**: Actualiza automaticamente tasas legales (ISR, ISSS, AFP)\n✓ **Eficiencia**: Reduce tiempo de procesamiento de nomina de dias a horas\n✓ **Transparencia**: Genera recibos detallados con desglose de percepciones/descuentos\n✓ **Toma de decisiones**: Reportes analiticos sobre masa salarial y costos laborales\n\n💡 **Impacto estrategico**:\n• Mejora la satisfaccion laboral (pagos exactos y oportunos)\n• Reduce riesgos legales (cumplimiento normativo automatizado)\n• Optimiza recursos HR (libera +60% tiempo administrativo)\n\n¿Te gustaria que profundice en algun aspecto especifico de como funcionaria para tu caso?",
    "planillas": "📊 **¿Que es un Sistema de Planillas y como beneficia a tu organizacion?**\n\nUna planilla es el corazon de la administracion salarial que automatiza:\n\n🔵 **Funcionamiento tecnico**:\n1. _Base de datos centralizada_: Integra informacion laboral, financiera y tributaria\n2. _Motor de calculo_: Aplica formulas preconfiguradas para salarios, descuentos y beneficios\n3. _Ciclo automatizado_: Desde la captura de asistencia hasta el pago y generacion de reportes\n\n🟢 **Beneficios clave**:\n✓ **Precision**: Elimina errores humanos en calculos complejos (ej: horas extras acumuladas)\n✓ **Cumplimiento**: Actualiza automaticamente tasas legales (ISR, ISSS, AFP)\n✓ **Eficiencia**: Reduce tiempo de procesamiento de nomina de dias a horas\n✓ **Transparencia**: Genera recibos detallados con desglose de percepciones/descuentos\n✓ **Toma de decisiones**: Reportes analiticos sobre masa salarial y costos laborales\n\n💡 **Impacto estrategico**:\n• Mejora la satisfaccion laboral (pagos exactos y oportunos)\n• Reduce riesgos legales (cumplimiento normativo automatizado)\n• Optimiza recursos HR (libera +60% tiempo administrativo)\n\n¿Te gustaria que profundice en algun aspecto especifico de como funcionaria para tu caso?",
    "generar planilla": "⚙️ **Proceso Inteligente de Generacion de Planillas**\n\n🔧 _Paso a paso automatizado_: \n1️⃣ **Captura de datos**: \n   • Sincroniza con dispositivos biometricos (asistencia)\n   • Importa novedades (horas extras, permisos)\n   • Verifica integridad de datos (alertas de inconsistencias)\n\n2️⃣ **Calculo multidimensional**:\n   📐 Salarios base + variables\n   ➖ Descuentos legales (ISR, ISSS, AFP)\n   ➕ Beneficios (bonos, incentivos)\n   🧮 Proyecciones de pago\n\n3️⃣ **Validacion inteligente**:\n   🔍 Revision de topes legales\n   ⚠️ Deteccion de anomalias\n   📊 Comparativo historico\n\n4️⃣ **Ejecucion**:\n   💸 Generacion de archivos bancarios\n   📄 Creacion de recibos digitales\n   📦 Exportacion a sistemas contables\n\n🕒 _Tiempo reducido de 8h a 15min por proceso_\n\n🌟 **Beneficios clave**:\n• 0 errores en calculos complejos\n• Auditoria digital completa\n• Integracion con Tesoreria\n• Cumplimiento 100% normativo\n\n¿Necesitas configurar algun parametro especial para tu proxima generacion?",
    "modulo de planilla": "📦 **Arquitectura del Modulo de Planillas**\n\n🧠 _Nucleo inteligente_: \n• Motor de calculos configurables (formulas personalizables)\n• Base de datos relacional (historico ilimitado)\n• API de integracion (contabilidad, bancos, ERP)\n\n🛠️ _Componentes clave_: \n1. **Configuracion**: \n   - Parametros legales actualizables\n   - Estructura salarial (puestos, escalafones)\n   - Perfiles fiscales\n\n2. **Procesamiento**:\n   - Calculo de nomina quincenal/mensual\n   - Proyecciones anuales\n   - Liquidaciones finales\n\n3. **Analitica**:\n   - Dashboard de costos laborales\n   - Tendencia historica\n   - Benchmarking por departamento\n\n4. **Seguridad**:\n   - Firma electronica avanzada\n   - Bitacora de cambios\n   - Roles y permisos granulares\n\n⚡ _Tecnologia habilitante_: \n▸ Cloud computing para acceso remoto\n▸ Blockchain para registros inmutables\n▸ IA para predecir patrones\n\n💼 **Ventajas competitivas**:\n✔ Reduce 90% errores manuales\n✔ Ahorra 75% tiempo en cierres\n✔ Genera reportes legales en 1 clic\n✔ Escala para 1 o 10,000 empleados\n\n¿Quieres conocer como se adaptaria a tu estructura organizacional?",
    "modulo de planilla": "📦 **Modulo Integral de Planillas**\n\n🔵 **Funciones centrales**:\n1. _Gestion salarial_: Calculo automatico de pagos, descuentos y beneficios\n2. _Ciclo de nomina_: Desde captura de datos hasta pago y reportes\n3. _Centralizacion_: Integra asistencia, RH y contabilidad\n\n🟢 **Ventajas clave**:\n✓ Reduce 90% errores manuales\n✓ Genera reportes legales en 1 clic\n✓ Adaptable a cualquier estructura\n\n💡 **Impacto**:\n• Cumplimiento legal garantizado\n• Ahorro de 75% tiempo administrativo",
    "dias laborales": "📅 **Configuracion de Dias Laborales**\n\n🔵 **Como funciona**:\n1. Define dias habiles por empresa/departamento\n2. Establece horarios flexibles\n3. Automatiza calculos de horas\n\n🟢 **Beneficios**:\n✓ Adaptable a turnos rotativos\n✓ Calcula automaticamente horas extras\n✓ Integracion con calendario fiscal\n\n💡 **Ejemplo**:\n• Lunes-Viernes: 8h/dia\n• Sabados: Medio dia (opcional)",
    "feriados": "🎉 **Gestion de Feriados**\n\n🔵 **Funcionalidades**:\n1. Registro de feriados nacionales/regionales\n2. Aplicacion automatica a nomina\n3. Alertas para planificacion\n\n🟢 **Ventajas**:\n✓ No requiere ajustes manuales\n✓ Respeta dias de descanso obligatorios\n✓ Genera reportes de impacto laboral\n\n💡 **Dato clave**:\n• Los feriados no se descuentan del salario",
    "bonificaciones": "💰 **Sistema de Bonificaciones**\n\n🔵 **Tipos soportados**:\n1. Por rendimiento\n2. Horas extras\n3. Transporte/Alimentacion\n4. Especiales (navidad, etc.)\n\n🟢 **Automatizacion**:\n✓ Calculo preciso segun parametros\n✓ Aplicacion en recibo de pago\n✓ Historial auditado\n\n💡 **Ejemplo**:\n• Bono productividad = 5% del salario base",
    "descuentos": "➖ **Gestion de Descuentos**\n\n🔵 **Tipos automaticos**:\n1. ISR (actualizado anualmente)\n2. Seguro social\n3. Prestamos laborales\n4. Otros autorizados\n\n🟢 **Control**:\n✓ Limites legales preconfigurados\n✓ Desglose detallado en recibos\n✓ Reportes para empleados\n\n💡 **Importante**:\n• Maximo 30% de descuento sobre salario",
    "salario neto": "💵 **Calculo de Salario Neto**\n\n🔵 **Formula automatizada**:\n[Salario bruto] - [Descuentos legales] + [Bonificaciones] = Neto\n\n🟢 **Precision**:\n✓ Considera todos los componentes\n✓ Genera desglose detallado\n✓ Opcion de simulacion\n\n💡 **Ejemplo**:\n• Bruto: $1,000 - ISR $150 + Bono $100 = Neto $950",
    "historial pagos": "🕰️ **Historial Completo**\n\n🔵 **Accesible para**:\n1. Empleados (sus datos)\n2. RH (toda la empresa)\n3. Auditoria (solo lectura)\n\n🟢 **Funciones**:\n✓ Consulta por periodo\n✓ Exporta a Excel/PDF\n✓ Comparativo anual\n\n💡 **Ventaja**:\n• Disponible 24/7 en la nube",
    "reporte afp": "📄 **Reporte AFP Automatizado**\n\n🔵 **Contenido**:\n1. Aportes laborales/patronales\n2. Base imponible\n3. Cotizaciones voluntarias\n\n🟢 **Cumplimiento**:\n✓ Formato 1101 prellenado\n✓ Firma digital integrada\n✓ Envio directo a la AFP\n\n💡 **Plazo**:\n• Genera en segundos",
    "reporte isss": "🏥 **Reporte ISSS**\n\n🔵 **Incluye**:\n1. Aportes mensuales\n2. Incapacidades\n3. Subsidios\n\n🟢 **Automatizacion**:\n✓ Actualiza tasas vigentes\n✓ Valida topes legales\n✓ Integracion con plataforma ISSS\n\n💡 **Dato**:\n• Se genera con cada planilla",


    // Control de asistencia
    "asistencia": "⏱️ **Sistema Inteligente de Asistencia**\n\n🔵 **Funciones clave**:\n1. Registro multimodal (huella, facial, tarjeta, app movil)\n2. Calculo automatico de horas trabajadas\n3. Integracion con planillas\n\n🟢 **Beneficios**:\n✓ Elimina fichajes manuales\n✓ Detecta patrones de ausentismo\n✓ Genera alertas en tiempo real\n\n💡 **Impacto**:\n• Reduccion del 30% en retardos\n• 99.7% precision en registros",
    "marcar entrada": "🖐️ **Registro de Entrada**\n\n🔵 **Opciones**:\n1. Reloj biometrico (huella/facial)\n2. App con geolocalizacion\n3. Web para teletrabajo\n\n🟢 **Ventajas**:\n✓ Marca hora exacta con time-stamp\n✓ Foto automatica en dispositivos moviles\n✓ Notificacion instantanea a supervisores\n\n💡 **Importante**:\n• Tolerancia de 5-10 minutos segun politica",
    "marcar salida": "✌️ **Registro de Salida**\n\n🔵 **Proceso**:\n1. Mismo metodo que entrada\n2. Sistema calcula horas laboradas\n3. Detecta salidas anticipadas\n\n🟢 **Control**:\n✓ Bloqueo de marcaciones duplicadas\n✓ Alerta si excede jornada legal\n✓ Integracion con horas extras\n\n💡 **Dato**:\n• Jornada maxima: 8h diarias / 44h semanales",
    "retraso": "⚠️ **Gestion de Retardos**\n\n🔵 **Automatico**:\n1. Detecta llegadas tardias\n2. Aplica politicas preconfiguradas\n3. Genera reportes mensuales\n\n🟢 **Flexibilidad**:\n✓ Permite justificaciones\n✓ Calcula acumulativos\n✓ Opcion de recuperar horas\n\n💡 **Ejemplo**:\n• 3 retardos = 1 falta automatica",
    "horas extras": "⏰ **Control de Horas Extras**\n\n🔵 **Calculo**:\n1. Identifica excedentes de jornada\n2. Diferenciacion diurna/nocturna\n3. Limites legales automatizados\n\n🟢 **Precision**:\n✓ Requiere aprobacion previa\n✓ Tarifas personalizables\n✓ Integracion con nomina\n\n💡 **Legal**:\n• Maximo 4h extras diarias",
    "justificar falta": "📝 **Justificacion de Ausencias**\n\n🔵 **Metodos**:\n1. Plataforma web/app\n2. Email con comprobante\n3. Autorizacion presencial\n\n🟢 **Flujo**:\n✓ Sube documentos (medicos, memo)\n✓ Notificacion a RRHH\n✓ Estado trackeable\n\n💡 **Plazo**:\n• 72 horas para justificar",
    "permiso especial": "🔄 **Solicitud de Permisos**\n\n🔵 **Tipos**:\n1. Medicos\n2. Personales\n3. Capacitacion\n\n🟢 **Automatizacion**:\n✓ Aprobacion electronica\n✓ Descuento automatico si aplica\n✓ Historial organizado\n\n💡 **Requisito**:\n• 24h anticipacion minima",
    "vacaciones": "🏖️ **Gestion de Vacaciones**\n\n🔵 **Automatizado**:\n1. Calcula dias acumulados\n2. Controla solicitudes\n3. Aprobacion por flujo digital\n\n🟢 **Transparencia**:\n✓ Saldo visible en tiempo real\n✓ Politicas por antigüedad\n✓ Integracion con calendario\n\n💡 **Derecho**:\n• 15 dias minimo por ley",
    "reporte asistencia": "📊 **Reportes de Asistencia**\n\n🔵 **Contenido**:\n1. Horas trabajadas/ausentes\n2. Tardanzas acumuladas\n3. Patrones por departamento\n\n🟢 **Formatos**:\n✓ PDF/Excel personalizable\n✓ Filtros por periodo/area\n✓ Graficos analiticos\n\n💡 **Uso**:\n• Ideal para auditorias",
    "biometrico": "👆 **Dispositivos Biometricos**\n\n🔵 **Tipos**:\n1. Huella digital\n2. Reconocimiento facial\n3. Tarjetas RFID\n\n🟢 **Ventajas**:\n✓ Elimina 'marcaciones prestadas'\n✓ Sincronizacion en la nube\n✓ Alertas de intentos falsos\n\n💡 **Recomendacion**:\n• Mantenimiento cada 6 meses",
   
    // Configuracion y soporte
    "configurar sistema": "⚙️ **Configuracion Inicial del Sistema**\n\n🔵 **Proceso paso a paso**:\n1. Registro de datos fiscales de la empresa\n2. Definicion de periodos de nomina\n3. Configuracion de politicas laborales\n4. Asignacion de roles administrativos\n\n🟢 **Beneficios**:\n✓ Asistente guiado para setup inicial\n✓ Plantillas preconfiguradas por industria\n✓ Validacion automatica de requisitos legales\n\n💡 **Tiempo estimado**:\n• 15-30 minutos para configuracion basica",
    "nuevo empleado": "👤 **Alta de Colaborador**\n\n🔵 **Requisitos**:\n1. Datos personales completos\n2. Contrato laboral vigente\n3. Asignacion de departamento/puesto\n4. Configuracion salarial y beneficios\n\n🟢 **Automatizacion**:\n✓ Generacion automatica de credenciales\n✓ Notificacion al area de sistemas\n✓ Programacion de induccion\n\n💡 **Dato clave**:\n• Disponible en web y app movil",
    "baja empleado": "🚪 **Proceso de Baja Laboral**\n\n🔵 **Flujo automatizado**:\n1. Registro de fecha y motivo de baja\n2. Calculo de liquidacion final\n3. Desactivacion de accesos\n4. Generacion de certificados\n\n🟢 **Control**:\n✓ Auditoria de procesos\n✓ Archivo digital de documentos\n✓ Integracion con el IMSS\n\n💡 **Legal**:\n• Conserva datos por 5 años",
    "modificar datos": "✏️ **Actualizacion de Informacion**\n\n🔵 **Campos editables**:\n1. Datos personales (direccion, telefono)\n2. Situacion fiscal\n3. Beneficios y deducciones\n4. Horarios y turnos\n\n🟢 **Seguridad**:\n✓ Requiere autenticacion doble\n✓ Registro de cambios en bitacora\n✓ Notificacion al empleado\n\n💡 **Importante**:\n• Algunos cambios requieren aprobacion de RRHH",
    "respaldar datos": "💾 **Copia de Seguridad**\n\n🔵 **Opciones**:\n1. Automatica (diaria/semanal)\n2. Manual bajo demanda\n3. En la nube o local\n\n🟢 **Proteccion**:\n✓ Cifrado AES-256\n✓ Verificacion de integridad\n✓ Almacenamiento redundante\n\n💡 **Recomendacion**:\n• Realizar backup antes de actualizaciones",
    "restaurar sistema": "🔙 **Recuperacion de Datos**\n\n🔵 **Escenarios**:\n1. Migracion a nuevo equipo\n2. Recuperacion post-falla\n3. Pruebas de auditoria\n\n🟢 **Precision**:\n✓ Seleccion por punto de tiempo\n✓ Validacion pre-restauracion\n✓ Modo prueba sin afectar datos actuales\n\n💡 **Advertencia**:\n• Requiere permisos de administrador",
    "actualizar software": "🔄 **Actualizacion del Sistema**\n\n🔵 **Mejoras incluidas**:\n1. Parches de seguridad\n2. Nuevas funcionalidades\n3. Optimizaciones de rendimiento\n\n🟢 **Ventajas**:\n✓ Actualizacion en un clic\n✓ Compatibilidad con versiones anteriores\n✓ Registro detallado de cambios\n\n💡 **Frecuencia**:\n• Actualizaciones menores mensuales\n• Versiones mayores semestrales",
    "permisos usuario": "🔒 **Gestion de Accesos**\n\n🔵 **Niveles disponibles**:\n1. Administrador total\n2. RH (edicion limitada)\n3. Consulta (solo lectura)\n4. Personalizado por modulo\n\n🟢 **Control**:\n✓ Asignacion por departamento\n✓ Herencia de permisos\n✓ Revocacion inmediata\n\n💡 **Seguridad**:\n• Autenticacion multifactor opcional",
    "reporte personalizado": "📑 **Generador de Reportes**\n\n🔵 **Caracteristicas**:\n1. Seleccion de campos especificos\n2. Filtros avanzados por periodo/departamento\n3. Formatos exportables (PDF, Excel, CSV)\n\n🟢 **Productividad**:\n✓ Plantillas reutilizables\n✓ Programacion de envios automaticos\n✓ Graficos interactivos\n\n💡 **Uso avanzado**:\n• Conexion a PowerBI/Tableau",
    "soporte tecnico": "🛠️ **Asistencia Especializada**\n\n🔵 **Canales de contacto**:\n1. Chat en vivo (24/5)\n2. Ticket prioritario\n3. Soporte remoto\n4. Visita tecnica\n\n🟢 **Cobertura**:\n✓ Respuesta en menos de 2h para urgencias\n✓ Base de conocimiento actualizada\n✓ Capacitacion incluida\n\n💡 **Horario extendido**:\n• Lunes a viernes 7am-10pm",

    // Integraciones y movil
    "app movil": "📱 **App Movil para Colaboradores**\n\n🔵 **Funciones clave**:\n1. Marcacion geolocalizada con selfie\n2. Consulta de recibos y beneficios\n3. Solicitud de permisos/vacaciones\n4. Notificaciones push importantes\n\n🟢 **Ventajas**:\n✓ Disponible 24/7 (iOS/Android)\n✓ Sin consumo alto de datos\n✓ Modo offline para zonas sin conexion\n\n💡 **Seguridad**:\n• Autenticacion biometrica obligatoria\n• Cifrado end-to-end",
    "integracion contabilidad": "🧾 **Conexion con Sistemas Contables**\n\n🔵 **Sistemas compatibles**:\n1. SAP\n2. QuickBooks\n3. Contpaq\n4. Oracle Netsuite\n\n🟢 **Automatizacion**:\n✓ Exporta asientos diarios/mensuales\n✓ Clasifica por centro de costo\n✓ Genera polizas electronicas\n\n💡 **Formato**:\n• XML/JSON estandar contable\n• Compatible con SAT",
    "sincronizar datos": "🔄 **Sincronizacion en Tiempo Real**\n\n🔵 **Puntos de integracion**:\n1. Dispositivos biometricos → Nube\n2. App movil → Servidor central\n3. Modulos internos (HR → Contabilidad)\n\n🟢 **Beneficios**:\n✓ Actualizacion cada 5 minutos\n✓ Resolucion de conflictos automatica\n✓ Historial de cambios\n\n💡 **Requisito**:\n• Conexion minima 3G para campo",
    "correo masivo": "✉️ **Comunicacion Corporativa**\n\n🔵 **Opciones de envio**:\n1. Por departamento/ubicacion\n2. Individual/grupos\n3. Programado (fecha/hora)\n\n🟢 **Plantillas incluidas**:\n✓ Recibos de pago\n✓ Recordatorios legales\n✓ Encuestas de clima laboral\n\n💡 **Estadisticas**:\n• Tasa de apertura >85%\n• Links rastreables",
    "firma digital": "🖋️ **Firma Electronica Avanzada**\n\n🔵 **Usos principales**:\n1. Autorizacion de nominas\n2. Aprobacion de documentos RH\n3. Validacion de reportes legales\n\n🟢 **Certificaciones**:\n✓ FIEL (SAT)\n✓ e.firma\n✓ Estandar ISO 27001\n\n💡 **Legalidad**:\n• Mismo valor que firma autografa\n• Audit trail completo",

    // Legal y cumplimiento
     "leyes laborales": "⚖️ **Cumplimiento Normativo Automatizado**\n\n🔵 **Regulaciones integradas**:\n1. LFT (Art. 123 y reformas)\n2. IMSS/INFONAVIT\n3. Ley del Trabajo Remoto\n4. NOM-035-STPS\n\n🟢 **Actualizaciones**:\n✓ Ajuste automatico a reformas\n✓ Alertas de cambios legales\n✓ Documentacion prellenada\n\n💡 **Ventaja**:\n• Reduce 95% riesgos de multas",
    "salario minimo": "💰 **Gestion de Salarios Minimos**\n\n🔵 **Cobertura**:\n1. Zonas geograficas (A/B/C)\n2. Profesionales/oficios\n3. Esquemas mixtos (salario + comisiones)\n\n🟢 **Automatizacion**:\n✓ Ajuste anual automatico\n✓ Calculo de retroactivos\n✓ Integracion con tabuladores\n\n💡 **2024**:\n• $248.93 (Zona A)\n• $185.56 (Zona B)",
    "aguinaldo": "🎁 **Calculo de Aguinaldo**\n\n🔵 **Parametros configurables**:\n1. Dias base (15+ por politica)\n2. Antigüedad adicional\n3. Prorrateo para bajas\n\n🟢 **Precision**:\n✓ Proporcional a meses trabajados\n✓ Considera salario variable\n✓ Genera recibos especiales\n\n💡 **Plazo**:\n• Debe pagarse antes del 20/dic",
    "indemnizacion": "💸 **Liquidaciones Automaticas**\n\n🔵 **Componentes calculados**:\n1. Prima de antigüedad\n2. Vacaciones proporcionales\n3. Aguinaldo proporcional\n4. 90 dias de salario\n\n🟢 **Legalidad**:\n✓ Topes actualizados\n✓ Impuestos retenidos\n✓ Formularios LFT prellenados\n\n💡 **Exactitud**:\n• Margen de error <0.5%",
    "formulario fiscal": "📝 **Generacion de Formatos Fiscales**\n\n🔵 **Documentos disponibles**:\n1. DIAT\n2. CFDI de nomina\n3. Declaracion anual\n4. Estados de cuenta\n\n🟢 **Cumplimiento**:\n✓ Sellos digitales SAT\n✓ Timbre fiscal integrado\n✓ Historial de envios\n\n💡 **Obligatorio**:\n• Conservar 5 años+",
    "auditoria": "🔍 **Herramientas de Auditoria**\n\n🔵 **Funcionalidades**:\n1. Trail de cambios completo\n2. Comparativo historico\n3. Deteccion de anomalias\n\n🟢 **Reportes**:\n✓ PDF firmado digitalmente\n✓ Exportacion a Excel\n✓ Filtros por periodo/usuario\n\n💡 **Requisito**:\n• ISO 27001 compliant",

    // Respuestas por defecto
    "default": "No estoy seguro de entender. Prueba con alguna de estas opciones:\n\n• 'Generar planilla'\n• 'Reporte de asistencia'\n• 'Configurar horarios'\n• 'Soporte tecnico'",
    "error": "⚠️ Ocurrio un error. Por favor intenta nuevamente o contacta a soporte tecnico si el problema persiste.",
        // 1. Consultas basicas (10)
    "mi recibo de pago": "📄 **Obtener tu recibo**:\n1. Entra a 'Mi cuenta' en el sistema\n2. Ve a 'Historial de pagos'\n3. Selecciona el mes y descarga PDF\n💡 _Problemas?_: contacta a RH@empresa.com",
    
    "cuando depositan": "📅 **Fechas de pago**:\n• Sueldos: dia 30 de cada mes\n• Bonos: 5 dias habiles despues del cierre\n⚠️ _Festivos_: Se adelanta al dia habil anterior",
    
    "no me llego mi pago": "❌ **Pago faltante**:\n1. Verifica tu estado en 'Mis pagos'\n2. Revisa si hay notificaciones\n3. Reporta a RH en las primeras 72h\n🔍 _Causas comunes_: \n• Cuenta bancaria incorrecta\n• Retraso del banco (24-48h)",

    // 2. Deducciones (8)
    "por que me descontaron": "➖ **Descuentos tipicos**:\n1. ISR (Ley)\n2. AFORE (6.5% de tu salario)\n3. Fondo de ahorro (opcional)\n📲 Consulta el desglose en tu recibo digital",
    
    "quitar descuento": "✋ **Modificar descuentos**:\n• _Voluntarios_: Cancela en 'Mis beneficios'\n• _Legales_: Requieren cambio de situacion fiscal\n⏳ _Proceso_: 5 dias habiles para actualizarse",

    // 3. Horarios y asistencias (7)
    "marcar entrada tarde": "⏰ **Registro de retardo**:\n1. El sistema marca automaticamente\n2. Justifica en 'Asistencias'\n3. Limite: 3 retardos = 1 falta\n💡 _Tolerancia_: 10 minutos",
    
    "error en mi asistencia": "🔄 **Corregir marcacion**:\n1. Solicita ajuste a tu supervisor\n2. Sube comprobante (foto, correo)\n3. RH aprueba en 48h\n📌 _Regla_: Maximo 2 correcciones/mes",

    // 4. Beneficios (10)
    "donde veo mis vacaciones": "🏖️ **Vacaciones acumuladas**:\n1. Ingresa a 'Mis beneficios'\n2. Ve a 'Tiempo libre'\n3. Verifica dias disponibles\n📅 _Derecho_: 12 dias/año (primer año)",
    
    "pedir dia economico": "💰 **Dia economico**:\n1. Solicita en 'Mis permisos'\n2. Selecciona fecha\n3. Adjunta justificante\n⚖️ _Limite_: 5 dias/año (no acumulables)",

    // 5. Problemas tecnicos (5)
    "olvide mi contraseña": "🔑 **Recuperar acceso**:\n1. Haz clic en '¿Olvidaste tu contraseña?'\n2. Ingresa tu correo corporativo\n3. Sigue el enlace (valido 1h)\n📲 _Alternativa_: Contacta a soporte@empresa.com",
    
    "la app no funciona": "🛠️ **Solucion rapida**:\n1. Reinstala la aplicacion\n2. Verifica tu conexion a internet\n3. Actualiza tu sistema operativo\n💻 _Version minima_: Android 9 / iOS 13",

    // 6. Liquidaciones (5)
    "calcular mi finiquito": "🧮 **Estimador de finiquito**:\n1. Ve a 'Mis documentos'\n2. Selecciona 'Simular finiquito'\n3. Ingresa fecha de baja\n📌 _Incluye_: \n• Prima de antigüedad\n• Vacaciones pendientes",
    
    "cuando pagan finiquito": "⏳ **Plazos legales**:\n• 3 dias habiles (renuncia)\n• 72 horas (despido)\n⚠️ _Demora comun_: 5-7 dias por tramites bancarios",

    // 7. Datos personales (5)
    "cambiar mi cuenta bancaria": "🏦 **Actualizar datos bancarios**:\n1. Sube un estado de cuenta reciente\n2. Formato 'Actualizacion de datos'\n3. Firma digital\n🔒 _Seguridad_: Cambios activos en 48h",
    
    "actualizar mi direccion": "🏠 **Modificar domicilio**:\n1. Ve a 'Mi perfil'\n2. Adjunta comprobante (luz/telefono)\n3. Confirma con SMS\n📬 _Importante_: Para envio de documentos fiscales",

        // --- CONSULTAS GENERALES ---
    "¿Cual es la fecha de pago de nomina?": "📅 **Fechas establecidas**:\n• Pago quincenal: dias 15 y 30 de cada mes\n• Pago de bonos: 5 dias habiles posteriores al cierre\n• En caso de dia festivo: se anticipa al dia habil anterior",

    "¿Donde puedo obtener mi recibo de nomina?": "📄 **Opciones disponibles**:\n1. Portal del empleado (seccion 'Documentos')\n2. Aplicacion movil corporativa\n3. Departamento de Recursos Humanos\n💡 Requiere autenticacion con usuario y contraseña",

    // --- DEDUCCIONES ---
    "¿Que descuentos aplican a mi sueldo?": "💰 **Descuentos reglamentarios**:\n1. ISR (Impuesto Sobre la Renta)\n2. Aportacion al SAR (6.5% del salario)\n3. Cuotas sindicales (si aplica)\n4. Prestamos autorizados\n\nConsulte el desglose completo en su recibo digital",

    "¿Como solicito la cancelacion de un descuento voluntario?": "✍️ **Procedimiento**:\n1. Presentar solicitud por escrito en RH\n2. Proporcionar numero de cuenta y referencia\n3. Plazo de procesamiento: 3-5 dias habiles\n⚠️ Restricciones: No aplica para descuentos judiciales",

    // --- ASISTENCIA ---
    "¿Cual es el procedimiento para reportar una falla en el registro de asistencia?": "⏱️ **Protocolo establecido**:\n1. Notificar al supervisor inmediato\n2. Enviar correo a sistemas@empresa.com con:\n   - Fecha y hora del incidente\n   - Fotografia del comprobante\n3. Validacion en 48 horas habiles",

    "¿Existe tolerancia para el registro de entrada?": "🕒 **Politica de puntualidad**:\n• Tolerancia estandar: 10 minutos\n• Despues de este margen:\n   - Se considera retardo\n   - Acumula 3 retardos = 1 falta\n• Excepciones por situaciones extraordinarias",

    // --- BENEFICIOS ---
    "¿Como consulto mis dias de vacaciones acumulados?": "🏖️ **Consulta de beneficios**:\n1. Inicie sesion en el portal del empleado\n2. Seleccione 'Mis prestaciones'\n3. Apartado 'Derechos laborales'\n📊 Informacion actualizada al dia",

    "¿Cual es el proceso para solicitar un prestamo personal?": "🏦 **Requisitos crediticios**:\n1. Antigüedad minima: 1 año\n2. Solicitud firmada\n3. Aprobacion del comite\n4. Descuento automatico del 20% del salario neto\n📌 Tasa de interes: 12% anual",

    // --- PROBLEMAS ---
    "¿Que debo hacer si no recibi mi deposito de nomina?": "❗ **Protocolo de incidencias**:\n1. Verificar estado en 'Mis pagos'\n2. Confirmar con institucion bancaria\n3. Reportar a RH dentro de las 72 horas\n📌 Adjunte comprobante de cuenta bancaria",

    "¿Como rectificar un error en mi recibo de nomina?": "✏️ **Proceso de rectificacion**:\n1. Presentar solicitud formal\n2. Adjuntar evidencia documental\n3. Analisis por Contabilidad\n4. Correccion en siguiente ciclo de pago\n⏳ Tiempo de respuesta: 10 dias habiles",

    // 1. PERCEPCIONES
    "Composicion salarial": "📊 **Estructura remunerativa**:\n• Salario base\n• Compensaciones garantizadas\n• Primas contractuales\n• Incentivos variables\n\nConsulte su desglose en el portal de nomina",

    "Componentes del paquete compensatorio": "🏛️ **Elementos retributivos**:\n1. Remuneracion fija\n2. Bonos por resultados\n3. Beneficios en especie\n4. Contribuciones patronales\n\nReferencia: Art. 27 LFT",

    // 2. DEDUCCIONES
    "Retenciones fiscales aplicables": "💰 **Calculo de impuestos**:\n• ISR (Tabla progresiva)\n• Cuotas IMSS\n• Aportaciones SAR\n• Deducciones judiciales\n\nActualizado segun resolucion fiscal vigente",

    "Ajustes a contribuciones seguridad social": "⚖️ **Modificaciones legales**:\n1. Revisar declaracion anual\n2. Validar bases de cotizacion\n3. Rectificar en siguiente periodo\n\nPlazo: 15 dias habiles posteriores",

    // 3. BENEFICIOS
    "Derechos prestacionales acumulables": "🏆 **Prestaciones de ley**:\n• Prima vacacional (25%+)\n• Aguinaldo (15+ dias)\n• Utilidades (3 meses maximo)\n\nVease Art. 80-89 LFT",

    "Procedimiento para goce de dias adicionales": "📝 **Solicitud formal**:\n1. Presentar escrito en RH\n2. Anexar documentacion comprobatoria\n3. Esperar dictamen de elegibilidad\n\nTiempo de respuesta: 10 dias habiles",

    // 4. INCIDENCIAS
    "Rectificacion de errores en liquidacion": "✒️ **Protocolo de correccion**:\n1. Notificar por escrito a Contabilidad\n2. Adjuntar evidencia documental\n3. Validar con area juridica\n\nAplicacion en siguiente ciclo de pago",

    "Reclamo por diferencias remunerativas": "⚖️ **Via de solucion**:\n1. Mediacion interna (RH)\n2. Conciliacion ante Junta\n3. Demanda laboral\n\nPlazo maximo: 1 año desde el pago irregular",

    // 5. DOCUMENTACION
    "Emision de constancias fiscales": "📑 **Documentos oficiales**:\n• CFDI de nomina\n• Constancia de retenciones\n• Comprobante de percepciones\n\nDisponibles en portal SAT-IDSE",

    "Certificacion de ingresos laborales": "🏦 **Requisitos bancarios**:\n1. Solicitud firmada\n2. Copia de identificacion\n3. Codigo de verificacion\n\nValidez: 90 dias naturales"
};
    // Añadir mensaje al chat
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = text;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Manejar envío de mensajes
    function handleSendMessage() {
        const userText = userInput.value.trim();
        if (!userText) return;
        
        addMessage(userText, true);
        userInput.value = '';
        
        setTimeout(() => {
            const botText = botResponses[userText.toLowerCase()] || botResponses["default"];
            addMessage(botText, false);
        }, 500);
    }

    // Eventos
    sendButton.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleSendMessage());

    // Mensaje inicial (solo primera vez)
    let firstOpen = true;
    icon.addEventListener('click', () => {
        if (firstOpen) {
            setTimeout(() => {
                addMessage("¡Hola! Pregúntame sobre trámites catastrales. Ejemplo: '¿Cómo pagar el predial?'", false);
            }, 300);
            firstOpen = false;
        }
    }, { once: true });
});