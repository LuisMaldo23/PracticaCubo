const normasISO = {
    'ISO 27001': {
        'Descripcion': 'Norma principal para establecer, implementar, mantener y mejorar un Sistema de Gestión de Seguridad de la Información (SGSI), garantizando la confidencialidad, integridad y disponibilidad de la información.',
        'CampoAplicacion': '',
        'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Pérdida de datos: Pérdida o corrupción de información crítica.</li>
                        <li>Fallas de hardware: Mal funcionamiento de equipos que pueden interrumpir operaciones.</li>
                        <li>Errores de software: Bugs que pueden comprometer la funcionalidad y seguridad.</li>
                        <li>Obsolescencia tecnológica: Equipos o software desactualizados que no reciben soporte.</li>
                        <li>Accesibilidad limitada: Dificultades para acceder a sistemas y datos bajo ciertas condiciones.</li>
                    </ul>
                </div>
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de malware: Infecciones por virus, ransomware, etc.</li>
                        <li>Phishing: Intentos de suplantación de identidad para robar credenciales.</li>
                        <li>Acceso no autorizado: Intrusiones y accesos ilegales a sistemas y redes.</li>
                        <li>Exfiltración de datos: Robo de información sensible.</li>
                        <li>Denegación de servicio (DoS): Ataques que buscan hacer que los servicios sean inaccesibles.</li>
                    </ul>
                </div>
            </div>
        `,
        'Controles': {
            'Tecnología de la Información': [
                {
                    'ID': 'A5.9',
                    'Titulo': 'Inventario de información y otros activos',
                    'Descripcion': 'Establecer y mantener un proceso de gestión de datos documentado. En el proceso, abordar la confidencialidad de los datos, el propietario de los datos, el manejo de los datos, los límites de retención de datos y los requisitos de eliminación, en función de los estándares de confidencialidad y retención de la empresa. Revisar y actualizar la documentación anualmente o cuando se produzcan cambios importantes en la empresa que puedan afectar a esta salvaguardia.'
                },
                {
                    'ID': 'A8.8',
                    'Titulo': 'Gestión de vulnerabilidades técnicas',
                    'Descripcion': 'Realice análisis automatizados de vulnerabilidades de los activos internos de la empresa de forma trimestral o con mayor frecuencia. Realice análisis tanto autenticados como no autenticados.'
                }
            ],
            'Seguridad de la Información': [
                {
                    'ID': 'A8.7',
                    'Titulo': 'Protección contra malware',
                    'Descripcion': 'Implementar medidas de seguridad para prevenir, detectar y responder ante malware en sistemas y redes.'
                },
                {
                    'ID': 'A8.8',
                    'Titulo': 'Gestión de vulnerabilidades técnicas',
                    'Descripcion': 'Procesos para identificar y corregir vulnerabilidades en infraestructuras y aplicaciones.'
                }
            ],
            'Continuidad del negocio': [
                {
                    'ID': 'A5.9',
                    'Titulo': 'Inventario de información y otros activos',
                    'Descripcion': 'Mantener un inventario actualizado de los activos críticos para la continuidad del negocio.'
                },
                {
                    'ID': 'A8.19',
                    'Titulo': 'Instalación de software en sistemas operativos',
                    'Descripcion': 'Controlar y supervisar la instalación de software para garantizar la seguridad y continuidad de operaciones.'
                }
            ],
            'Gestión de riesgos': [
                {
                    'ID': 'A8.8',
                    'Titulo': 'Gestión de vulnerabilidades técnicas',
                    'Descripcion': 'Evaluar y mitigar riesgos de seguridad derivados de vulnerabilidades tecnológicas.'
                },
                {
                    'ID': 'A8.7',
                    'Titulo': 'Protección contra malware',
                    'Descripcion': 'Estrategias para prevenir infecciones y ataques de software malicioso.'
                }
            ]
        },
        'IDControl': 'ID-27001',
    },

        'ISO 27002': {
            'Descripcion': 'Proporciona un conjunto detallado de controles de seguridad y mejores prácticas para la implementación de un SGSI basado en ISO 27001.',
            'CampoAplicacion': '<br/>1.Seguridad de las aplicaciones<br/>2.Continuidad del negocio<br/>3.Gestión de riesgos<br/>',
            'RiesgoAsociado': `
        <div class="riesgos-listas">
            <div class="lista-riesgos">
                <h4>Riesgos Tecnológicos</h4>
                <ul>
                    <li> Fallas de hardware: Interrupciones o mal funcionamiento de servidores, discos duros, redes y otros componentes críticos.</li>
                    <li> Errores de software y vulnerabilidades: Bugs o defectos en aplicaciones y sistemas que pueden comprometer la integridad y disponibilidad de la información.</li>
                    <li>Malas configuraciones de sistemas: Errores en la configuración de servidores, dispositivos de red o aplicaciones que pueden dejar canales abiertos para accesos no autorizados.</li>
                    <li>.Fallas en la gestión de cambios: Cambios implementados sin el control adecuado, generando inestabilidad o brechas en la seguridad de la infraestructura..</li>
                </ul>
            </div>

            <div class="lista-riesgos">
                <h4>Ciber Riesgos</h4>
                <ul>
                    <li> Fuga o exposición de información: Brechas de seguridad que resultan en la divulgación o pérdida de datos confidenciales.</li>
                    <li>Robo de identidad y fraude digital: Uso indebido de datos personales o empresariales para realizar actividades fraudulentas.</li>
                    <li>Ataques de denegación de servicio (DDoS): Saturación de los sistemas para inhabilitar el acceso y la operatividad de servicios críticos.</li>
                    <li> Explotación de vulnerabilidades: Aprovechamiento de fallos en software, configuraciones o protocolos para acceder de forma no autorizada a sistemas.</li>
                    <li>Inseguridad en entornos de nube: Problemas derivados de configuraciones deficientes o controles insuficientes en servicios cloud.</li>
                </ul>
            </div>
        </div>
    `,
            'NombreControl': '',
            'IDControl': 'ID-27002',
        },
        'ISO 27032': {
            'Descripcion': 'Se centra en la ciberseguridad, abordando amenazas en redes, sistemas y el ciberespacio, incluyendo la gestión de riesgos y colaboración entre entidades.',
            'CampoAplicacion': '<br/>1.Gestión de la Ciberseguridad<br/>2.Protección de Infraestructuras Críticas<br/>3.Seguridad de la información<br/>4.Seguridad de las redes<br/>5.Continuidad del negocio<br/>6.Seguridad en Internet<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de TI: Problemas en servidores, redes, dispositivos de comunicación y otros componentes críticos que afectan la continuidad y seguridad de los servicios.</li>
                        <li>Obsolescencia tecnológica y software desactualizado: Uso de sistemas, hardware y aplicaciones sin el soporte o actualizaciones necesarias, lo que deja expuestas vulnerabilidades conocidas.</li>
                        <li>Errores en la configuración y gestión de sistemas: Malas configuraciones, falta de controles adecuados o errores en la administración de los sistemas que generan puntos de fallo.</li>
                        <li>Vulnerabilidades en dispositivos IoT y endpoints: Dispositivos conectados que carecen de las medidas de seguridad requeridas, aumentando la superficie de ataque.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Inyección de código y explotación de vulnerabilidades: Ataques (por ejemplo, inyección SQL u otros vectores de inyección) que permiten ejecutar comandos maliciosos en el sistema.</li>
                        <li>Intercepción y manipulación de datos en tránsito: Ataques tipo “Man-in-the-Middle” que capturan, alteran o redirigen la información durante su transmisión.</li>
                        <li>Accesos no autorizados y escalada de privilegios: Intrusiones que permiten a actores externos o internos obtener accesos indebidos a sistemas o datos sensibles.</li>
                        <li>menazas a la cadena de suministro digital: Riesgos derivados de vulnerabilidades en proveedores o servicios externos que se integran en el entorno digital de la organización.</li>
                </div>
            </div>
        `,
           
            'NombreControl': '',
            'IDControl': 'ID-27032',
        },
        'ISO 27033': {
            'Descripcion': 'Conjunto de normas que proporcionan directrices para la seguridad en redes, incluyendo evaluación de riesgos, amenazas y controles de protección.',
            'CampoAplicacion': '<br/>1.Seguridad de la Infraestructura de Red<br/>2.Protección contra amenazas externas<br/>3.Diseño y gestión de la seguridad de redes<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Diseño de red inadecuado: Arquitecturas mal planificadas que no incorporan controles de seguridad esenciales ni segmentación adecuada.</li>
                        <li> Mala segmentación y aislamiento de red: La falta de una segmentación efectiva facilita la propagación de ataques dentro de la red.</li>
                        <li> Configuraciones predeterminadas inseguras: Uso de ajustes por defecto en dispositivos de red, los cuales pueden ser fácilmente aprovechados por atacantes.</li>
                        <li>Vulnerabilidades en redes inalámbricas: Implementaciones de Wi-Fi con cifrado débil o sin controles adecuados, exponiendo la red a accesos no autorizados.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Accesos no autorizados: Intrusiones que aprovechan fallas en los controles de red para obtener acceso indebido a recursos críticos.</li>
                        <li> Sniffing y monitoreo malicioso del tráfico: Captación de información mediante la monitorización no autorizada del flujo de datos.</li>
                        <li>Propagación de malware a través de la red: Utilización de la red como vector para diseminar virus, ransomware u otro software malicioso.</li>
                        <li>Ataques a la cadena de suministro de red: Riesgos derivados de la incorporación de equipos o software de terceros con vulnerabilidades que pueden comprometer la red.</li>
                </div>
            </div>
        `,
           
            'NombreControl': '',
            'IDControl': 'ID-27033',
        },
        'ISO 27034': {
            'Descripcion': 'Define un marco para la seguridad en aplicaciones, garantizando que el desarrollo y mantenimiento de software sigan prácticas seguras.',
            'CampoAplicacion': '<br/>1.Diseño y gestión de la seguridad de aplicaciones<br/>2.Seguridad en el ciclo de vida del desarrollo de software<br/>3.Protección contra amenazas externas<br/>.',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Diseño inseguro de la aplicación: Arquitecturas y diseños que no incorporan principios de seguridad desde la concepción, generando vulnerabilidades estructurales.</li>
                        <liErrores en el desarrollo y codificación: Defectos en el código, como la validación insuficiente de entradas o un manejo inadecuado de errores, que pueden facilitar la explotación.</li>
                        <li>Integración de componentes inseguros: Uso de bibliotecas, frameworks o componentes de terceros sin someterlos a evaluaciones de seguridad rigurosas.</li>
                        <li>Configuración y despliegue inadecuados: Configuraciones predeterminadas o mal ajustadas en servidores, bases de datos o entornos de ejecución que exponen la aplicación a ataques.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Cross-Site Scripting (XSS): Inyección de scripts maliciosos en páginas web, que pueden comprometer la integridad de la información y la privacidad de los usuarios.</li>
                        <li>Fallas en la autenticación y gestión de sesiones: Mecanismos de autenticación débiles o mal implementados que facilitan el acceso no autorizado o el secuestro de sesiones.</li>
                        <li>Ataques de denegación de servicio (DoS): Explotación de debilidades en la aplicación para sobrecargar recursos, afectando la disponibilidad y continuidad del servicio.</li>
                        <li>Manipulación de la lógica de negocio: Alteración maliciosa de la funcionalidad prevista de la aplicación para conseguir resultados fraudulentos o no deseados.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27034',
        },
        'ISO 27035': {
            'Descripcion': 'Proporciona un enfoque estructurado para la gestión de incidentes de seguridad de la información, incluyendo detección, análisis y respuesta.',
            'CampoAplicacion': '<br/>1.Gestión de incidentes de seguridad de la información<br/>2.Evaluación de incidentes<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de TI: Problemas en hardware, software, redes y dispositivos críticos que pueden interrumpir servicios o generar incidentes.</li>
                        <li>Vulnerabilidades en sistemas y aplicaciones: Errores de programación, configuraciones inadecuadas o deficiencias en el mantenimiento que facilitan la aparición de incidentes.</li>
                        <li>Obsolescencia tecnológica: Uso de sistemas o componentes desactualizados, sin los parches o actualizaciones necesarios, que pueden contener vulnerabilidades conocidas.</li>
                        <li>Problemas en la gestión de cambios y mantenimiento Cambios implementados sin una adecuada planificación o control, introduciendo inestabilidades o brechas de seguridad.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de malware, ransomware y virus: Software malicioso diseñado para dañar, robar o cifrar información, afectando la integridad y disponibilidad de los sistemas.</li>
                        <li> Intrusiones y accesos no autorizados: Explotación de vulnerabilidades para lograr accesos indebidos a sistemas o información crítica.</li>
                        <li> Ataques de phishing e ingeniería social Técnicas de manipulación para obtener credenciales o información sensible, facilitando la acción de actores maliciosos..</li>
                        <li>Ataques de denegación de servicio (DoS/DDoS): Intentos de saturar los recursos de la red o sistemas, interrumpiendo la continuidad de los servicios.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27035',
        },
        'ISO 27036': {
            'Descripcion': 'Especifica controles para la gestión de relaciones con terceros, asegurando la seguridad en acuerdos con proveedores y socios comerciales.',
            'CampoAplicacion': '<br/>1.Seguridad de la información en las relaciones con proveedores<br/>2.Gestión de riesgos<br/>3.Integración de Sistemas<br/>4.Adquisición de Software y Servicios TI<br/>5.Mantenimiento y Soporte Técnico',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura y sistemas de proveedores: Uso de hardware y software obsoletos o mal mantenidos que pueden contener vulnerabilidades.</li>
                        <li>Deficiencias en la integración de sistemas: Problemas de interoperabilidad entre los sistemas internos y los de terceros, lo que puede generar brechas en la seguridad.</li>
                        <li>Gestión inadecuada de cambios y actualizaciones: Falta de control en la implementación de cambios tecnológicos en los sistemas de los proveedores, afectando la estabilidad y protección.</li>
                        <li>Protección deficiente de interfaces y conexiones: Insuficiente seguridad en los canales de comunicación e interfaces tecnológicas utilizadas para el intercambio de información con proveedores.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Accesos no autorizados y brechas de seguridad: Vulnerabilidades en los sistemas de los proveedores que permiten intrusiones y acceso indebido a datos críticos.</li>
                        <li>Propagación de malware y ransomware a través de la cadena de suministro: Ataques cibernéticos que inician en la infraestructura de un proveedor y se extienden a la organización.</li>
                        <li>Intercepción y manipulación de datos en tránsito: Riesgo de que la información compartida entre la organización y el proveedor sea interceptada, alterada o robada durante su transmisión.</li>
                        <li>Falta de controles de seguridad en terceros: Incumplimiento de estándares y políticas de seguridad por parte de proveedores, que incrementa la exposición a ataques.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27036',
        },
        'ISO 27017': {
            'Descripcion': 'Extiende ISO 27002 con controles específicos para la computación en la nube, ayudando a proveedores y clientes a gestionar riesgos en entornos cloud.',
            'CampoAplicacion': '<br/>1.Controles de Seguridad de la información en el contexto de los servicios en la nube<br/>2.Gestión de riesgos en la nube<br/>3.Protección de datos<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Configuración inadecuada de la infraestructura cloud: Errores o malas prácticas en la configuración de entornos virtuales y dispositivos (por ejemplo, servidores virtuales, redes y firewalls) que pueden exponer datos o dejar abiertos vectores de ataque.</li>
                        <li>Obsolescencia tecnológica en plataformas cloud: Uso de tecnologías o servicios en la nube que no se actualizan o evolucionan conforme a los estándares de seguridad actuales, lo que aumenta el riesgo de explotación.</li>
                        <li>Problemas de integración y compatibilidad: Dificultades para integrar de forma segura sistemas locales con servicios en la nube o entre diferentes servicios cloud, lo que puede generar configuraciones erróneas o brechas de seguridad.</li>
                        <li>Riesgos asociados a la virtualización y multi-tenancy: En entornos compartidos, la inadecuada segregación y aislamiento entre clientes (tenants) puede permitir que vulnerabilidades en un entorno afecten a otros.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Vulnerabilidades en APIs e interfaces de gestión: Las APIs mal diseñadas o expuestas sin las medidas de seguridad adecuadas pueden ser explotadas para interceptar, manipular o extraer información.</li>
                        <li>Fugas de datos y exposición de información confidencial: La inadecuada protección de la información durante su almacenamiento y transmisión en la nube puede provocar la divulgación de datos sensibles.</li>
                        <li>Ataques de denegación de servicio (DoS/DDoS):Los servicios en la nube pueden ser blanco de ataques que saturan la capacidad de procesamiento y afectan la disponibilidad de los recursos.</li>
                        <li>Amenazas externas (phishing, malware, ransomware): Los actores maliciosos pueden intentar aprovechar vulnerabilidades específicas en la nube para instalar software malicioso o llevar a cabo ataques de ingeniería social dirigidos a usuarios y administradores.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27017',
        },
        'ISO 27005': {
            'Descripcion': 'Proporciona un marco metodológico para la gestión del riesgo en seguridad de la información, alineado con ISO 31000.',
            'CampoAplicacion': '<br/>1.Gestión de riesgos en la seguridad de la información<br/>2.Evaluación de riesgos tecnológicos<br/>3.Tratamiento de riesgos tecnológicos<br/>4.Monitoreo y revisión de riesgos<br/>5.Identificación de riesgos tecnológicos<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Errores en el software y vulnerabilidades: Defectos en el desarrollo, errores de codificación o bugs que pueden comprometer la integridad y seguridad de los sistemas.</li>
                        <li>Obsolescencia tecnológica: Uso de equipos, software o sistemas sin soporte ni actualizaciones, aumentando la exposición a vulnerabilidades conocidas.</li>
                        <li>Falta de gestión de parches y actualizaciones: No aplicar correcciones y actualizaciones de seguridad, lo que deja sistemas expuestos a exploits.</li>
                        <li>Configuraciones inadecuadas: Uso de configuraciones predeterminadas o mal ajustadas en dispositivos, sistemas operativos y aplicaciones que pueden facilitar accesos indebidos.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de malware y ransomware: Software malicioso diseñado para dañar, cifrar o robar información sensible.</li>
                        <li>Phishing e ingeniería social: Técnicas de engaño que buscan obtener credenciales y datos confidenciales mediante manipulaciones a usuarios.</li>
                        <li>Ataques de denegación de servicio (DoS/DDoS): Intentos de saturar sistemas o redes para interrumpir la disponibilidad de servicios críticos.</li>
                        <li>Ataques a aplicaciones web: Explotación de vulnerabilidades en aplicaciones (como inyecciones, Cross-Site Scripting, etc.) para ejecutar comandos maliciosos.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27005',
        },
        'ISO 27014': {
            'Descripcion': 'Establece principios y mejores prácticas para la gobernanza de la seguridad de la información, asegurando alineación con los objetivos organizacionales.',
            'CampoAplicacion': '<br/>1.Gobernanza de la seguridad de la información dentro de las organizaciones<br/>2.Responsabilidades y roles en TI<br/>3.Monitoreo y auditoría de TI<br/>4.Evaluación de riesgos tecnológicos<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Alineación y coordinación inadecuada Falta de integración entre la estrategia de TI y la estrategia de seguridad de la información.</li>
                        <li>Fallas en la infraestructura tecnológica Infraestructura obsoleta o mal gestionada (hardware, redes, sistemas operativos).</li>
                        <li>Gestión deficiente de cambios tecnológicos Riesgo Falta de controles y procesos formales para la actualización o incorporación de nuevas tecnologías.</li>
                        <li>Falta de supervisión de inversiones en seguridad Inversión insuficiente o mal focalizada en tecnología de seguridad.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques cibernéticos y amenazas externas Incremento de ataques dirigidos (malware, ransomware, phishing).</li>
                        <li>Vulnerabilidades en aplicaciones y sistemas Fallos en el desarrollo o configuración de aplicaciones que pueden ser explotados por actores maliciosos.</li>
                        <li>Fallas en la detección y respuesta a incidentes Procesos de respuesta a incidentes poco efectivos o ausencia de supervisión en la seguridad cibernética.</li>
                        <li>Riesgos en la cadena de suministro cibernética Dependencia de terceros cuyos controles de seguridad no se alineen con los estándares de la organización.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27014',
        },
        'ISO 27701': {
            'Descripcion': 'Extensión de ISO 27001 que proporciona un marco para la gestión de la privacidad de la información, ayudando al cumplimiento de regulaciones como el RGPD.',
            'CampoAplicacion': '<br/>1.Gestión de la privacidad de la información en organizaciones<br/>2.Protección de datos personales<br/>3.Gestión de riesgos de privacidad<br/>4.Controles de seguridad específicos<br/>5.Monitoreo y auditoría de privacidad<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de almacenamiento de datos personales Errores en servidores, bases de datos y almacenamiento en la nube que pueden provocar la pérdida o corrupción de datos personales.</li>
                        <li>Obsolescencia tecnológica y falta de actualizaciones Uso de sistemas y software desactualizados sin soporte.</li>
                        <li>Errores en la gestión de acceso y autenticación Configuración inadecuada de roles y permisos para el acceso a datos personales.</li>
                        <li> Mala gestión del ciclo de vida de la información Almacenamiento de datos personales más allá del período necesario o su eliminación inadecuada.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Fugas o filtraciones de datos personales Exposición accidental o deliberada de información privada debido a ataques o errores humanos.</li>
                        <li>Ataques de phishing y robo de credenciales Ingeniería social para obtener acceso a información sensible.</li>
                        <li> Ataques de malware y ransomware Software malicioso que cifra o extrae datos personales sin autorización.</li>
                        <li>Vulnerabilidades en APIs y servicios en la nube Brechas en la seguridad de APIs expuestas o mal protegidas.</li>
                </div>
            </div>
        `,
            'NombreControl': 'controlesss',
            'IDControl': 'ID-27701',
        },
        'ISO 27018': {
            'Descripcion': 'Se enfoca en la protección de datos personales en la nube, asegurando el cumplimiento de normativas de privacidad y protegiendo la información de usuarios.',
            'CampoAplicacion': '<br/>1.Protección de datos personales en servicios en la nube<br/>2.Controles de seguridad específicos para la nube<br/>3.Monitoreo y auditoría de privacidad en la nube<br/>4.Gestión de riesgos de privacidad en la nube<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Mala configuración de la infraestructura en la nube: Errores en la configuración de servidores, bases de datos y entornos virtuales pueden dejar expuestos los datos personales a accesos no autorizados.</li>
                        <li>Fallas en la redundancia y disponibilidad de datos: No contar con copias de seguridad o estrategias de recuperación ante desastres puede llevar a la pérdida permanente de información personal en caso de fallos técnicos.</li>
                        <li>Fallas en la segregación de datos entre clientes en la nube: En entornos multiusuario, una mala separación de datos puede permitir que información de un cliente sea accesible por otro, violando la privacidad.</li>
                        <li>Errores en la eliminación de datos personales: Si los datos no se eliminan correctamente, pueden ser recuperados o retenidos indebidamente, lo que representa un riesgo de incumplimiento normativo.</li>
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Accesos no autorizados y robo de datos personales en la nube Atacantes pueden explotar vulnerabilidades para obtener acceso indebido a información personal almacenada en la nube.</li>
                        <li>Ataques de phishing dirigidos a administradores de entornos en la nube Suplantación de identidad para engañar a los administradores y obtener credenciales de acceso privilegiado, lo que facilita el robo de datos.</li>
                        <li>Ataques de ransomware en entornos de almacenamiento en la nube Cifrado malicioso de archivos personales con el fin de exigir un pago para su liberación, afectando la disponibilidad de la información.</li>
                        <li>Vulnerabilidades en las API de servicios en la nube Si las APIs no están correctamente protegidas, pueden ser explotadas para acceder, modificar o eliminar datos personales sin autorización.</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-27018',
        },
        'ISO 31000': {
            'Descripcion': 'Define un marco para la gestión de riesgos en organizaciones, aplicable a cualquier sector, ayudando a identificar, evaluar y mitigar amenazas.',
            'CampoAplicacion': '<br/>1.Identificación de riesgos tecnológicos<br/>2.Monitoreo y revisión de riesgo<br/>3.Desarrollo de Software<br/>4.Comunicación de riesgos<br/>5.Seguridad Cibernética<br/>6.Servicios en la Nube<br/> ',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de TI: Interrupciones en servidores, redes o sistemas críticos.</li>
                        <li>Errores en el desarrollo de software: Bugs o defectos en aplicaciones que afectan su funcionalidad y seguridad.</li>
                        <li>Obsolescencia tecnológica: Uso de sistemas, hardware o software desactualizados sin soporte.</li>
                        <li>Fallos en la gestión de cambios: Implementaciones deficientes de nuevas tecnologías o actualizaciones.</li>
                        <li>Fallas en la gestión de datos: Pérdida o corrupción de información por problemas técnicos o errores administrativos.</li>

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de malware: Virus, ransomware, spyware o troyanos que dañan sistemas y datos.</li>
                        <li>Phishing y ataques de ingeniería social: Engaños para obtener credenciales y datos sensibles.</li>
                        <li>Robo de identidad y fraude cibernético: Uso indebido de información personal o financiera.</li>
                        <li>Ataques de denegación de servicio (DDoS): Saturación de servidores para inhabilitar servicios.</li>
                        <li>Riesgos en el uso de la nube: Exposición de datos o mala configuración de servicios cloud.</li>
                        <li>Intercepción de datos en tránsito: Ataques como "Man-in-the-Middle" (MitM).</li>
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-31000',
        },
        'ISO 31010': {
            'Descripcion': 'Complementa ISO 31000 con un conjunto de técnicas y herramientas de evaluación de riesgos, como análisis FMEA, árboles de decisión y análisis de Monte Carlo.',
            'CampoAplicacion': '<br/>1.Evaluacion de Riesgos Empresariales<br/>2.Gestión de Proyectos de TI<br/>3.Infraestructura de TI<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en infraestructura tecnológica: Fallos en servidores, bases de datos, redes y dispositivos de almacenamiento.</li>
                        <li>Obsolescencia tecnológica: Uso de sistemas desactualizados o sin soporte.</li>
                        <li>Errores en la integración de sistemas: Incompatibilidades entre software, hardware o sistemas heredados Impacto: Fallos en la interoperabilidad, pérdida de datos y vulnerabilidades de seguridad.</li>
                        <li>Problemas en la gestión del ciclo de vida de datos: Pérdida de información crítica o incumplimiento de regulaciones.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Accesos no autorizados y robo de credenciales: Filtraciones de información confidencial y control indebido de sistemas.</li>
                        <li>Ataques de malware y ransomware: Instalación de software malicioso que cifra o extrae datos sensibles.</li>
                        <li>Ataques de phishing y manipulación de usuarios: Ingeniería social para obtener información confidencial.</li>
                        <li>Vulnerabilidades en aplicaciones y servicios web: Explotación de fallos de seguridad en software y APIs.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-31010',
        },
        'ISO 22300': {
            'Descripcion': 'Define términos clave y conceptos relacionados con continuidad del negocio, resiliencia organizacional y gestión de crisis',
            'CampoAplicacion': '<br/>1.Planificación de la continuidad del negocio<br/>2.Monitoreo y revisión de la continuidad<br/>3.Evaluación de riesgos tecnológicos<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de TI: Interrupciones en servidores, redes o sistemas críticos que pueden afectar las operaciones esenciales de la organización.</li>
                        <li>Dependencia de proveedores externos: Problemas en la cadena de suministro tecnológica que pueden afectar la disponibilidad y seguridad de los servicios esenciales.</li>
                
                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques cibernéticos: Incidentes como malware, ransomware o ataques de denegación de servicio (DDoS) que pueden comprometer la seguridad y disponibilidad de los sistemas de información.</li>
                        <li>Fallas en la gestión de actualizaciones: No aplicar parches o actualizaciones de seguridad puede dejar vulnerabilidades explotables por atacantes.</li>
               
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-22300',
        },
        'ISO 22301': {
            'Descripcion': 'Establece un Sistema de Gestión de Continuidad del Negocio (SGCN) para ayudar a las organizaciones a prepararse, responder y recuperarse de interrupciones operativas.',
            'CampoAplicacion': '<br/>1.Gestión de la continuidad del negocio (BCM)<br/>2.Planificación de la continuidad del negocio<br/>3.Servicios de TI gestionados<br/>4.Gestión de datos<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de TI: Pérdida de acceso a servidores, bases de datos o sistemas críticos debido a fallos de hardware o software.</li>
                        <li>Interrupción en los servicios en la nube: Caídas en la nube por problemas técnicos o errores en la configuración afectan la continuidad operativa.</li>
                        <li>Errores en la gestión de copias de seguridad: Falta de backups actualizados o inaccesibilidad de copias en caso de desastre.</li>
                        <li>Obsolescencia tecnológica: Uso de hardware o software desactualizado aumenta el riesgo de fallos y vulnerabilidades de seguridad.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de ransomware: Secuestro de datos críticos que impide el acceso a sistemas esenciales, afectando la continuidad del negocio.</li>
                        <li>Denegación de servicio distribuida (DDoS): Saturación de los servidores con tráfico malicioso, provocando la caída de sistemas clave.</li>
                        <li>Accesos no autorizados a sistemas críticos: Robo de credenciales o explotación de vulnerabilidades para acceder a información confidencial.</li>
                        <li>Ataques a la cadena de suministro: Vulnerabilidades en proveedores o socios comerciales afectan la disponibilidad de servicios esenciales.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-22301',
        },
        'ISO 22313': {
            'Descripcion': 'Proporciona guía complementaria para la implementación efectiva de ISO 22301, con ejemplos y mejores prácticas.',
            'CampoAplicacion': '<br/>1.Gestión de la continuidad del negocio (BCM)<br/>2.Evaluación de Riesgos<br/>3.Análisis de Impacto en el Negocio (BIA)<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>Fallas en la infraestructura de TI: Interrupciones en servidores, bases de datos o redes que impactan la continuidad del negocio.</li>
                        <li>Pérdida o corrupción de datos: Errores en sistemas de almacenamiento o bases de datos que resultan en la pérdida de información clave.</li>
                        <li>Fallas en la gestión de copias de seguridad: Backups desactualizados, inaccesibles o corruptos pueden impedir la recuperación de datos tras un incidente.</li>
                        <li>Interrupción de servicios en la nube: Problemas en proveedores de nube pueden causar pérdida de acceso a aplicaciones y datos esenciales.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de ransomware: Bloqueo de sistemas y datos críticos por software malicioso, afectando la operación del negocio.</li>
                        <li>Ataques de denegación de servicio (DDoS); Sobrecarga de servidores que interrumpe el acceso a servicios esenciales.</li>
                        <li>Robo o acceso no autorizado a datos sensibles: Explotación de vulnerabilidades para acceder a información confidencial.</li>
                        <li>Suplantación de identidad y ataques de phishing: Técnicas de ingeniería social para robar credenciales y obtener acceso no autorizado.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': 'ID-22313',
        },
        'NIST (CSF)': {
            'Descripcion': 'Marco diseñado para ayudar a las organizaciones a gestionar y reducir los riesgos de ciberseguridad.',
            'CampoAplicacion': '<br/>1.Gestión de la ciberseguridad<br/>2.Reducción de riesgos en sistemas de información<br/>3.Identificación de activos tecnológicos<br/>4.Detección de amenazas cibernéticas<br/>5.Recuperación de sistemas tecnológicos<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura de TI: Interrupciones en servidores, bases de datos, redes o sistemas críticos.</li>
                        <li>.Errores en el software y hardware: Bugs, fallos en la configuración o vulnerabilidades en sistemas operativos y aplicaciones.</li>
                        <li>.Obsolescencia tecnológica: Uso de software y hardware desactualizados sin soporte, aumentando riesgos de seguridad.</li>
                        <li>.Obsolescencia tecnológica: Uso de software y hardware desactualizados sin soporte, aumentando riesgos de seguridad.</li>
                        <li>.Fallas en la gestión de cambios: Implementaciones deficientes de actualizaciones o nuevos sistemas sin pruebas adecuadas.</li>

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Malware y ransomware: Software malicioso que cifra, roba o daña información y sistemas.</li>
                        <li>Phishing e ingeniería social: Engaños para obtener credenciales y datos sensibles.</li>
                        <li>Ataques de denegación de servicio (DDoS): Sobrecarga de servidores para inhabilitar servicios.</li>
                        <li>Fugas de datos y pérdida de información: Exposición de datos sensibles por ataques o negligencia.</li>
                        <li>Intercepción de datos en tránsito: Ataques tipo "Man-in-the-Middle" (MitM) para robar información en comunicación.</li>
                         <li>Uso de dispositivos no seguros (BYOD): Conexión de equipos personales sin controles adecuados.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'NIST SP 800-53': {
            'Descripcion': 'Conjunto de controles de seguridad y privacidad para sistemas de información federales y organizaciones críticas. Incluye medidas para gestión de acceso, protección de datos, detección de amenazas y respuesta a incidentes..',
            'CampoAplicacion': '<br/>1.Controles de seguridad para sistemas tecnológicos<br/>2.Protección de Datos<br/>3.Auditoría y Evaluación de Seguridad<br/>4.Seguridad Cibernética<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura de TI: Fallos en hardware, redes, sistemas de almacenamiento o servidores que pueden interrumpir la operatividad.</li>
                        <li>.Obsolescencia tecnológica: Uso de sistemas, software o equipos sin soporte o actualizaciones, aumentando la vulnerabilidad ante amenazas.</li>
                        <li>.Errores en la gestión de cambios y configuraciones: Cambios mal implementados o configuraciones inadecuadas que generan brechas en la seguridad o inestabilidad en los sistemas.</li>
                        <li>.Fallas en la continuidad operativa: Incapacidad para mantener el funcionamiento de sistemas críticos ante eventos disruptivos, afectando la disponibilidad de servicios.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de malware y ransomware: Software malicioso que puede dañar sistemas, cifrar datos o robar información sensible.</li>
                        <li>Phishing e ingeniería social: Técnicas de engaño para obtener credenciales o datos confidenciales, facilitando accesos no autorizados.</li>
                        <li>Ataques de denegación de servicio (DoS/DDoS): Saturación de los sistemas o redes para interrumpir la disponibilidad de servicios críticos.</li>
                        <li>Fugas y robo de datos: Exposición o sustracción de información sensible a causa de brechas en la seguridad o errores humanos.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'NIST SP 800-30': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Evaluación de riesgos en sistemas de información<br/>2.Seguridad cibernética<br/>3.Protección de Datos<br/>4.Auditoría y Evaluación de Seguridad<br/>5.Infraestructura de TI<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en hardware y software: Mal funcionamiento o fallos en servidores, dispositivos de red, bases de datos o software crítico.</li>
                        <li>.Errores de configuración en sistemas de TI: Configuración incorrecta en firewalls, servidores o bases de datos que dejan expuestos los sistemas.</li>
                        <li>. Fallas en la redundancia y recuperación de datos: Falta de planes de recuperación y copias de seguridad desactualizadas pueden causar pérdida de información.</li>
                        <li>.Interrupciones en los servicios de nube y telecomunicaciones: Caídas en la conectividad, fallos en proveedores de servicios en la nube o interrupciones en el suministro de energía.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>Ataques de ransomware: Software malicioso que cifra datos y exige un pago para su recuperación.</li>
                        <li>Ataques de denegación de servicio (DDoS): Sobrecarga de tráfico malicioso que inhabilita sistemas y redes críticas.</li>
                        <li>Phishing y suplantación de identidad: Ataques de ingeniería social para obtener credenciales o información confidencial.</li>
                        <li>Ataques a APIs y servicios en la nube: Explotación de vulnerabilidades en interfaces y aplicaciones expuestas a internet.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'NIST SP 800-41': {
            'Descripcion': 'Guía para la gestión segura de firewalls y perímetros de red, asegurando que las organizaciones configuren y administren estos sistemas de manera efectiva.',
            'CampoAplicacion': '<br/>1.Seguridad de redes<br/>2.Monitoreo de Firewalls<br/>3.Gestión de Políticas de Seguridad<br/>4.Evaluación de Riesgos de Red<br/>5.Auditoría y Evaluación de Seguridad de Red<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura de red: Fallos en routers, switches, servidores y otros equipos críticos que afectan la comunicación y disponibilidad de la red.</li>
                        <li>.Interrupciones en la conectividad de red: Desconexiones o fallos de servicios de proveedores de Internet o telecomunicaciones que impactan la operación de la red.</li>
                        <li>.Mala configuración de la red: Errores en la configuración de firewalls, VPNs o protocolos de seguridad que dejan la red vulnerable a ataques.</li>
                        <li>.Inadecuada gestión de acceso a la red: Control deficiente de las credenciales de acceso a la red, lo que aumenta el riesgo de acceso no autorizado.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Intrusiones y acceso no autorizado: Exploiting de vulnerabilidades en la red para obtener acceso no autorizado a sistemas internos.</li>
                        <li>.Ataques Man-in-the-Middle (MITM): Interceptación de comunicaciones entre dos partes para espiar o modificar los datos transmitidos.</li>
                        <li>.Exfiltración de datos a través de la red: Uso de la red para robar información confidencial y transferirla a ubicaciones no autorizadas.</li>
                        <li>.Exploits a través de vulnerabilidades en protocolos de red: Ataques a través de fallos conocidos en protocolos como HTTP, FTP, SMTP o DNS, utilizados para comprometer la red.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'NIST (RMF)': {
            'Descripcion': 'Proporciona un proceso estructurado para la gestión del riesgo en sistemas de información, incluyendo categorización de información, selección de controles, implementación y monitoreo continuo..',
            'CampoAplicacion': '<br/>1.Gestión de riesgos de seguridad en sistemas de información<br/>2.Implementación de controles de seguridad<br/>3.Monitoreo continuo de la seguridad<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Obsolescencia de sistemas y tecnologías: Uso de hardware y software sin soporte o actualizado, lo que aumenta la exposición a vulnerabilidades y fallos de seguridad.</li>
                        <li>.Mala gestión de configuraciones: Errores en la configuración de sistemas y redes que pueden dejar puertas abiertas a ataques, como la configuración incorrecta de firewalls o servidores.</li>
                        <li>.Falta de redundancia y recuperación ante desastres: No contar con sistemas de respaldo o planes de recuperación que protejan ante fallos catastróficos, lo que interrumpe las operaciones.</li>
                        <li>.Desactualización o ineficiencia en la gestión de parches y actualizaciones: No aplicar actualizaciones de seguridad de manera oportuna, dejando los sistemas expuestos a amenazas conocidas.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Malware en dispositivos móviles y BYOD (Bring Your Own Device): Los dispositivos personales no controlados pueden introducir malware en la infraestructura de la organización, exponiendo los sistemas a riesgos.</li>
                        <li>.Compromiso de aplicaciones web y APIs: Los ataques dirigidos a vulnerabilidades en aplicaciones web o interfaces de programación de aplicaciones (API) pueden proporcionar acceso no autorizado a sistemas y datos.</li>
                        <li>.Intrusión en redes internas: Explotación de vulnerabilidades en la red o en el sistema para comprometer la integridad de los sistemas y robar información.</li>
                        <li>.Exfiltración de datos: Transferencia no autorizada de datos sensibles fuera de la red corporativa hacia ubicaciones no permitidas, ya sea por un ataque externo o interno.</li>
                        
                </div>
            </div>
        `,
          
            'NombreControl': '',
            'IDControl': '',
        },
        'NIST SP 800-34': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestión de la continuidad del negocio<br/>2.Recuperación ante desastres en sistemas de información<br/>3.Evaluación de impacto en el negocio<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura de TI: Interrupciones en los sistemas de red, servidores, dispositivos de almacenamiento o hardware clave, lo que afecta la continuidad operativa de la organización.</li>
                        <li>.Desastres naturales o fallos físicos de la infraestructura: Eventos como incendios, inundaciones o terremotos que destruyen el equipo de TI o afectan la infraestructura crítica.</li>
                        <li>.Pérdida de datos y corrupción de la información: Riesgo de que la información crucial sea destruida o dañada permanentemente debido a fallos de hardware, desastres o errores humanos.</li>
                        <li>.Fallas en la recuperación de datos: La incapacidad de restaurar correctamente los datos a partir de copias de seguridad debido a la falta de procedimientos adecuados o la desactualización de los backups.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ataques de ransomware: Los sistemas de la organización son cifrados por un atacante que exige un rescate para liberar los datos, lo que interrumpe las operaciones y compromete la confidencialidad e integridad de la información.</li>
                        <li>.Ataques de denegación de servicio (DDoS): Los atacantes inundan la red de la organización con tráfico malicioso para hacerla inaccesible, afectando la disponibilidad de los servicios.</li>
                        <li>.Accesos no autorizados a datos sensibles: Los atacantes o empleados malintencionados obtienen acceso no autorizado a datos confidenciales o sistemas críticos, exponiendo a la organización a riesgos de fuga de información.</li>
                        <li>. Phishing y suplantación de identidad: Técnicas de ingeniería social que permiten a los atacantes obtener credenciales de acceso para obtener control de los sistemas de TI o robar datos sensibles.</li>
                        
                </div>
            </div>
        `,
          
            'NombreControl': '',
            'IDControl': '',
        },
        'NIST SP 800-115': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Evaluación de la seguridad de los sistemas de información<br/>2.Pruebas de seguridad y evaluación de vulnerabilidades<br/>3.Pruebas de penetración (Penetration Testing<br/>4.Revisión de configuraciones de seguridad<br/>5.Análisis de tráfico de red<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Falta de pruebas de seguridad adecuadas: La ausencia de evaluaciones de seguridad regulares o pruebas de penetración puede dejar a los sistemas expuestos a vulnerabilidades que no son identificadas ni mitigadas.</li>
                        <li>.Errores en la configuración de sistemas: Configuraciones incorrectas o débiles en la infraestructura tecnológica (como servidores, firewalls y routers) pueden facilitar ataques cibernéticos o comprometer la seguridad de la información.</li>
                        <li>.Deficiencias en la actualización y parcheo de sistemas: No aplicar parches de seguridad de manera oportuna puede resultar en la explotación de vulnerabilidades conocidas por los atacantes.</li>
                        <li>.Falta de documentación y procedimientos de seguridad: La ausencia de registros detallados sobre la configuración de sistemas y procedimientos de seguridad puede dificultar la evaluación de la efectividad de los controles y retrasar la corrección de problemas.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Exploits de vulnerabilidades no detectadas: Las vulnerabilidades en sistemas operativos, aplicaciones o dispositivos de red no detectadas a través de pruebas de seguridad pueden ser explotadas por atacantes externos o internos.</li>
                        <li>.Ataques de inyección (SQL, XSS, etc.):Durante la evaluación de seguridad, los atacantes pueden descubrir vectores de inyección, como SQLi o XSS, que les permitan comprometer aplicaciones web, bases de datos o sistemas internos.</li>
                        <li>.Exposición de credenciales y acceso no autorizado: Las evaluaciones de seguridad pueden exponer credenciales sensibles o configuraciones inseguras, lo que permite a los atacantes ganar acceso a la red o los sistemas.</li>
                        <li>.Fugas de datos sensibles: Durante las pruebas de seguridad, puede haber un riesgo de exposición accidental de datos sensibles si las evaluaciones no se realizan de manera segura, como en el caso de pruebas de penetración en sistemas en producción.</li>
                        
                </div>
            </div>
        `,
          
            'NombreControl': '',
            'IDControl': '',
        },
        'PCI-DSS ': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Seguridad de datos en transacciones con tarjetas de pago<br/>2.,Seguridad de la red<br/>3.Gestión de vulnerabilidades<br/>4.Políticas de seguridad de la información<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Configuración insegura de redes: Fallos en la configuración de firewalls, routers y otros dispositivos de red que pueden permitir accesos no autorizados.</li>
                        <li>.Fallas en el cifrado de datos: Exposición de datos sensibles (en tránsito y en reposo) por no aplicar cifrado adecuado.</li>
                        <li>.Software desactualizado y falta de parches: Sistemas operativos y aplicaciones sin las actualizaciones necesarias, dejando vulnerabilidades conocidas sin mitigar.</li>
                        <li>.Vulnerabilidades en aplicaciones web: Fallos como inyección SQL, Cross-Site Scripting (XSS) y otros defectos en aplicaciones de pago que pueden ser explotados.</li>
                         <li>.Gestión inadecuada de logs y monitoreo: Falta de registros o análisis oportuno que impide detectar incidentes o anomalías en el sistema.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ataques de hackers y explotación de vulnerabilidades: Intrusiones que buscan vulnerar sistemas y acceder a datos de tarjetas mediante el aprovechamiento de debilidades en la infraestructura.</li>
                        <li>.Malware y ransomware: Software malicioso que puede infectar sistemas, cifrar datos o robar información crítica para realizar actividades fraudulentas.</li>
                        <li>.Phishing e ingeniería social: Técnicas de engaño para obtener credenciales o información sensible de empleados o usuarios, facilitando accesos ilícitos.</li>
                        <li>.Ataques de denegación de servicio (DDoS): Saturación de los sistemas y redes que interrumpe el procesamiento normal de transacciones y afecta la disponibilidad.</li>
                        <li>.Intercepción de datos en tránsito: Ataques del tipo “Man-in-the-Middle” que interceptan y capturan información durante su transmisión sin protección.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'COBIT-ISACA': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gobierno y Tecnología<br/>2.Gestión del Riesgo de TI<br/>3.Gestion de la continuidad de Negocios<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura de TI: Fallos en hardware, redes, almacenamiento y otros componentes críticos que pueden interrumpir la operatividad.</li>
                        <li>.Gestión inadecuada de cambios y configuraciones: Errores o falta de control en la implementación de nuevas tecnologías o actualizaciones, lo que puede introducir riesgos operativos.</li>
                        <li>.Integración deficiente de sistemas: Problemas en la interconexión de aplicaciones y plataformas que pueden afectar la eficiencia y seguridad de los procesos.</li>
                        <li>.Dependencia excesiva de proveedores externos: Riesgos derivados de la falta de control o de estándares de seguridad insuficientes en servicios y productos proporcionados por terceros.</li>
                         <li>.Fallos en el desarrollo y mantenimiento de software: Vulnerabilidades o errores en aplicaciones que pueden derivar en problemas operativos o de seguridad.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ataques de malware y ransomware: Amenazas que comprometen la integridad y disponibilidad de los sistemas mediante software malicioso.</li>
                        <li>.Vulnerabilidades en aplicaciones y sistemas: Fallos que pueden ser explotados para obtener acceso no autorizado o alterar información crítica.</li>
                        <li>.Phishing e ingeniería social: Técnicas de engaño que buscan obtener credenciales o información sensible a través de interacciones fraudulentas.</li>
                        <li>.Ataques de denegación de servicio (DDoS):Intentos de saturar la capacidad de los sistemas, afectando la disponibilidad de servicios críticos.</li>
                        <li>.Ataques a la cadena de suministro digital:Compromisos en proveedores o servicios externos que pueden introducir vulnerabilidades en la infraestructura de TI.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'ITIL': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestión de Servicios de TI<br/>2.Gestión de la Continuidad del Servicio<br/>3.Gestión de la Seguridad de la Información<br/>4.Gestión de Cambios<br/>5.Gestión de Incidentes<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura de TI: Riesgo de interrupciones en servidores, redes, almacenamiento y otros componentes críticos que pueden afectar la disponibilidad del servicio.</li>
                        <li>.Errores en la configuración y gestión de cambios: Cambios mal planificados o ejecutados pueden generar vulnerabilidades o provocar fallos en los servicios.</li>
                        <li>.Obsolescencia tecnológica: Uso de hardware o software desactualizado, lo que puede derivar en incompatibilidades, falta de soporte y vulnerabilidades.</li>
                        <li>.Problemas de capacidad y rendimiento: Un dimensionamiento inadecuado o sobrecarga de recursos que afecta la continuidad y eficiencia de los servicios.</li>
                         <li>.Integración deficiente de sistemas: Fallos en la interconexión o integración de componentes de TI que pueden provocar inestabilidad en el servicio.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Vulnerabilidades en la seguridad de la información: Falta o debilidad en los controles de seguridad que pueden permitir accesos no autorizados o explotación de fallos.</li>
                        <li>.Ataques de malware y ransomware: Amenazas que comprometen la integridad y disponibilidad de los sistemas, afectando la continuidad del servicio.</li>
                        <li>.Phishing y ataques de ingeniería social: Técnicas de engaño que buscan obtener credenciales o información sensible, facilitando accesos indebidos.</li>
                        <li>.Brechas de seguridad y fuga de datos: Incidentes que pueden exponer información crítica o sensible por fallos en la protección de datos.</li>
                        <li>.Gestión inadecuada de accesos e identidades: Deficiencias en la administración de privilegios que pueden facilitar el uso indebido o malicioso de los sistemas.</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'COSO ERM 2017': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestión de riesgos tecnologicos<br/>2.Control interno<br/>3.Gobierno corporativo<br/>4.Continuidad del negocio<br/>5.Cumplimiento normativo<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallas en la infraestructura tecnológica: Riesgos asociados a interrupciones en servidores, redes, almacenamiento y otros componentes críticos.</li>
                        <li>.Obsolescencia tecnológica: Uso de hardware, software o sistemas desactualizados que pueden dejar a la organización expuesta a vulnerabilidades.</li>
                        <li>.Errores en el software y aplicaciones: Fallos de programación, vulnerabilidades o defectos en el desarrollo que afectan la seguridad y funcionalidad.</li>
                        <li>.Fallas en la gestión de cambios: Implementaciones o actualizaciones mal planificadas que introducen inestabilidades o brechas en el sistema.</li>
                         <li>.Problemas de integración de sistemas: Dificultades en la interoperabilidad entre aplicaciones o plataformas que pueden generar errores operativos.</li>
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ataques cibernéticos (malware, ransomware): Amenazas que comprometen la integridad, disponibilidad y confidencialidad de los sistemas mediante software malicioso.</li>
                        <li>.Phishing e ingeniería social: Técnicas de engaño utilizadas para obtener información sensible o credenciales de acceso.</li>
                        <li>.Accesos no autorizados e intrusiones: Riesgos derivados de vulnerabilidades que permiten a actores maliciosos penetrar en los sistemas.</li>
                        <li>.Robo o pérdida de datos sensibles: Exposición o sustracción de información crítica, lo que puede tener impactos legales y reputacionales.</li>
                        <li>.Ataques de denegación de servicio (DDoS):Intentos de saturar la capacidad de la red o servidores para interrumpir la operatividad de los servicios..</li>
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'OWASP': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Desarrollo de aplicaciones seguras<br/>2.Evaluación de seguridad<br/>3.Gestión de amenazas automatizadas<br/>4.Seguridad de APIs<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallos Criptográficos (Cryptographic Failures): Problemas en la implementación de mecanismos criptográficos que protegen los datos sensibles.Origen: Decisiones tecnológicas inadecuadas.</li>
                        <li>. Diseño Inseguro (Insecure Design): Deficiencias en la arquitectura y planificación de la aplicación que generan debilidades desde el inicio.</li>
                        <li>.Configuración de Seguridad Incorrecta (Security Misconfiguration):Errores en la configuración de servidores, aplicaciones o dispositivos, que pueden dejar abiertos canales de ataque.</li>
                        <li>.Componentes Vulnerables y Desactualizados (Vulnerable and Outdated Components):Uso de bibliotecas, frameworks o software con vulnerabilidades conocidas por no estar actualizados o no ser seguros.</li>
                        
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Control de Acceso Roto (Broken Access Control):Fallas que permiten a usuarios maliciosos obtener privilegios o realizar acciones no autorizadas..</li>
                        <li>.Fallos en la Integridad del Software y de los Datos (Software and Data Integrity Failures):Falta de mecanismos para garantizar que el código y la información no han sido alterados maliciosamente..</li>
                        <li>.Falta de Registro y Monitoreo de la Seguridad (Security Logging and Monitoring Failures):Carencia o deficiencias en la detección y registro de actividades sospechosas, lo que retrasa la respuesta ante incidentes.</li>
                        <li>.. Server-Side Request Forgery (SSRF):Vulnerabilidad que permite a un atacante inducir al servidor a realizar solicitudes a sistemas internos o externos no previstos.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        '(RGPD)': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestión de datos personales<br/>2.Evaluaciones de impacto de privacidad<br/>',
           'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Pérdida o Destrucción de Datos: Los datos personales pueden perderse, corromperse o ser destruidos debido a fallos técnicos, como fallas de hardware o software.</li>
                        <li>.Acceso No Autorizado a los Datos: Acceso no autorizado a los datos personales debido a vulnerabilidades tecnológicas, como configuraciones incorrectas de sistemas o brechas de seguridad.</li>
                        <li>. Malware y Software Malicioso: Corromper y robo de datos.</li>
                        <li>.Fallas en la Integridad de los Datos: La manipulación o alteración no autorizada de los datos personales, lo que puede afectar su precisión y calidad.</li>
                        
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ciberataques (Hackeo): Los atacantes pueden obtener acceso no autorizado a los sistemas mediante técnicas de hacking, como ataques de fuerza bruta, inyecciones SQL o vulnerabilidades de software.</li>
                        <li>.Phishing: El uso de correos electrónicos o sitios web fraudulentos para engañar a los usuarios y obtener acceso a sus credenciales o datos personales.</li>
                        <li>.Ransomware: El uso de malware para bloquear o cifrar datos personales y exigir un rescate para liberar el acceso.</li>
                        <li>.Ataques de Denegación de Servicio (DDoS): Ataques diseñados para interrumpir el acceso a sistemas de procesamiento de datos personales mediante el envío masivo de tráfico, lo que sobrecarga los servidores.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'CNBS No.025/2022': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Cumplimiento normativo<br/>2.Gestión de Riesgo de TI<br/>3.Seguridad de la Información<br/>4.Ciberseguridad<br/>5.Continuidad de Negocios<br/>6.Auditoria de Sistemas de Información<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Riesgo de Confianza en la Infraestructura Tecnológica.</li>
                        <li>.Riesgo de Fallas en la Seguridad de los Sistemas Informáticos.</li>
                        <li>.Riesgo de Integridad de los Datos.</li>
                        <li>.Riesgo Operacional por Tecnología Inadecuada.</li>
                         <li>. Riesgo de Falta de Capacitación Tecnológica.</li>
                        
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ciberataques Externos (Hackeo).</li>
                        <li>.Riesgo de Phishing, suplantación de identidad.</li>
                        <li>.Riesgo de Exposición de Datos Sensibles.</li>
                        <li>.Vulnerabilidades en Terceros Proveedores de Servicios.</li>
                        <li>.Riesgo de Malware y Virus.</li>
                        <li>.Desviación de la Política de Privacidad y Protección de Datos.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'CNBS No.008/2023': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestión de Riesgos<br/>2.Ciberseguridad en el Sector Financiero<br/>3.Planes de Continuidad del Negocio<br/>4.BCP Gobernanza y Supervisión de Ciberseguridad<br/>5.Auditoría de Sistemas<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Fallos en los sistemas tecnológicos, como servidores, redes, bases de datos o software, que pueden interrumpir las operaciones financieras o poner en riesgo la integridad de los datos.</li>
                        <li>.La pérdida o corrupción de datos críticos para el funcionamiento de la institución financiera, ya sea por fallos técnicos, mal manejo o vulnerabilidades.</li>
                        <li>.La inestabilidad de las plataformas tecnológicas o sistemas que soportan los servicios financieros, lo que puede generar interrupciones o fallos en la disponibilidad de los servicios.</li>
                        <li>.Riesgo de Integridad de los Datos:  La manipulación o alteración no autorizada de datos, lo que puede afectar la exactitud y la confiabilidad de la información utilizada para las operaciones financieras.</li>
                        
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Riesgo de Violación de Políticas de Seguridad y Privacidad.</li>
                        <li>.Exposición y Pérdida de Información Sensible.</li>
                        <li>.Riesgo de ntroducción de malware o virus en los sistemas de la institución financiera que puede alterar o destruir datos sensibles.</li>
                        <li>.Riesgo de Explotación de Vulnerabilidades en la Infraestructura.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
        'CNBS No.195/2011': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestion Integral de Riego<br/>2.Política de Gobierno Corporativo<br/>3.Desarrollo de Planes de Acción<br/>4.Formación y Capacitación en Gestión de Riesgos<br/>',
           'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.Riesgo de fallos en la infraestructura tecnológica, tales como servidores, redes, bases de datos o software, pueden generar interrupciones operativas o pérdida de datos cruciales para las operaciones de la institución financiera.</li>
                        <li>. Pérdida o corrupción de datos debido a fallos en los sistemas informáticos, fallas de hardware, o errores en el manejo de la información, afectando la confidencialidad e integridad de los datos.</li>
                        <li>. Riesgo de Desactualización Tecnológica: Uso de tecnologías obsoletas o vulnerables que no son actualizadas adecuadamente y que pueden ser blanco fácil de ataques cibernéticos o fallos operacionales.</li>
                        <li>. Riesgo de dependencia de proveedores de servicios tecnológicos puede introducir vulnerabilidades, ya sea por la calidad de sus servicios o por la falta de cumplimiento con los estándares de seguridad requeridos.</li>
                        
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Riesgos asociados con el uso de servicios en la nube, como la pérdida de control sobre los datos o la exposición a vulnerabilidades de seguridad.</li>
                        <li>.Violación de las políticas de privacidad y protección de datos debido a un acceso no autorizado o uso indebido de la información de los clientes.</li>
                        <li>.Gestión inadecuada de contraseñas, como el uso de contraseñas débiles o la falta de autenticación multifactorial (MFA), puede facilitar el acceso no autorizado a sistemas críticos.</li>
                        <li>.Exposición de datos sensibles como información personal y financiera de los clientes debido a vulnerabilidades de los sistemas o malas prácticas de seguridad.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },

        'CNBS No.194/2011': {
            'Descripcion': 'Marco para la gestión del riesgo en seguridad de la información, utilizado para evaluar amenazas y vulnerabilidades en sistemas de TI y desarrollar estrategias de mitigación.',
            'CampoAplicacion': '<br/>1.Gestion Integral de Riegos<br/>2.Gobernanza corporativa<br/>3.Transparencia y Reporte<br/>4.Regulatorio  Control Interno<br/>',
            'RiesgoAsociado': `
            <div class="riesgos-listas">
                <div class="lista-riesgos">
                    <h4>Riesgos Tecnológicos</h4>
                    <ul>
                        <li>.La pérdida o alteración de datos esenciales debido a fallos en los sistemas o manejo inadecuado de la información.</li>
                        <li>.Vulnerabilidades no identificadas en software o hardware pueden ser explotadas, comprometiendo la seguridad de los sistemas y la integridad de los datos.</li>
                        <li>.Interrupción de servicios tecnológicos clave que afectan la operativa diaria de la institución financiera.</li>
                        <li>.Utilización de tecnologías obsoletas o desactualizadas puede generar fallos en los sistemas, haciéndolos más vulnerables a fallos o ataques.</li>
                        
                        

                    </ul>
                </div>
    
                <div class="lista-riesgos">
                    <h4>Ciber Riesgos</h4>
                    <ul>
                        <li>.Ataques de phishing, mediante los cuales los atacantes intentan engañar a los usuarios para que revelen información confidencial (como contraseñas y credenciales de acceso).</li>
                        <li>.Ataques de ransomware que secuestran los datos de la institución, cifrándolos y pidiendo un rescate para liberarlos, lo que puede afectar la disponibilidad de la información.</li>
                        <li>.Ataques DDoS consisten en sobrecargar los servidores de la institución con tráfico falso, lo que puede interrumpir la disponibilidad de los servicios en línea.</li>
                        <li>.Infección de los sistemas de la institución con malware o virus, lo que puede llevar a la alteración o destrucción de datos importantes, o incluso permitir el acceso no autorizado a los sistemas.</li>
                        
                        
                </div>
            </div>
        `,
            'NombreControl': '',
            'IDControl': '',
        },
    
        
    };


    function mostrarInfo(id) {
        // Ocultar todas las informaciones
        document.querySelectorAll('.info').forEach(el => el.style.display = 'none');
    
        const elemento = document.getElementById(id);
        // Mostrar la información correspondiente
        elemento.style.display = 'block';
    }
    
    function mostrarNormaInfo(norma) {
        // Actualizar cada categoría con la información de la norma seleccionada
        const normaInfo = normasISO[norma];
    
        // Actualizar los elementos de la información de la norma
        document.getElementById("IDControl").innerHTML = `ID Control: ${normaInfo.IDControl}`;
        document.getElementById("NombreControl").innerHTML = `Nombre Control: ${normaInfo.NombreControl}`;
        document.getElementById("Descripcion").innerHTML = `Descripción: ${normaInfo.Descripcion}`;
        document.getElementById("CampoAplicacion").innerHTML = `
            Campo de Aplicación: ${normaInfo.CampoAplicacion}
            <div class="button-container">
                <button onclick="mostrarControles('Tecnología de la Información')">Tecnología de la Información</button>
                <button onclick="mostrarControles('Seguridad de la Información')">Seguridad de la Información</button>
                <button onclick="mostrarControles('Gestión de riesgos')">Gestión de riesgos</button>
                <button onclick="mostrarControles('Continuidad del negocio')">Continuidad del negocio</button>
            </div>
        `;
        document.getElementById("RiesgoAsociado").innerHTML = `Riesgo Asociado: ${normaInfo.RiesgoAsociado}`;
    
        // Mostrar la información correspondiente de la norma
        document.getElementById("Estandar").style.display = 'block';
        document.querySelectorAll('.info').forEach(el => el.style.display = 'block');
    }
    
    function mostrarControles(campo) {
        const container = document.getElementById('controles-container');
        const controles = normasISO['ISO 27001'].Controles[campo];
        
        if (controles) {
            container.innerHTML = `
                <h3>Controles = ${campo}</h3>
                <ul>
                    ${controles.map(c => `<li><strong>${c.ID}</strong> - ${c.Titulo}: ${c.Descripcion}</li>`).join('')}
                </ul>
            `;
        } else {
            container.innerHTML = `<p>No hay controles asociados a ${campo}.</p>`;
        }
        container.style.display = 'block';
    }
    
    // Rotación del cubo
    let startX, startY, rotX = 0, rotY = 0;
    const cubo = document.getElementById("cubo");
    
    function startDrag(event) {
        startX = event.clientX;
        startY = event.clientY;
        document.onmousemove = rotateCubo;
        document.onmouseup = stopDrag;
    }
    
    function rotateCubo(event) {
        let deltaX = event.clientX - startX;
        let deltaY = event.clientY - startY;
        rotX += deltaY * 0.5;
        rotY += deltaX * 0.5;
        cubo.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        startX = event.clientX;
        startY = event.clientY;
    }
    
    function stopDrag() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
