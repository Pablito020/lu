const messages = [
    { text: "Sos brillante", type: "normal" },
    { text: "Tenes buen sentido del humor", type: "normal" },
    { text: "Admiro tu fuerza y forma de ser", type: "normal" },
    { text: "Me gusta tu sonrisa (Sonrei más desgraciada jaja)", type: "normal" },
    { text: "A pesar de tener cara de culo sos buena onda", type: "normal" },
    { text: "Tenés una energía hermosa", type: "normal" },
    { text: "Sos muy especial", type: "normal" },
    { text: "Gracias por ser como sos", type: "normal" },
    { text: "Estoy seguro que mucha gente esta orgullosa de vos", type: "normal" },
    { text: "Creetela más, tenes con que hacer lo que te propongas", type: "normal" },
    { text: "No sobrepienses tanto cabecita loca", type: "normal" },
    { text: "Valoro mucho lo genuina que sos", type: "normal" },
    { text: "Basta de exigirte tanto, hacé las cosas a tu ritmo", type: "normal" },
    { text: "Tenés una mirada muy linda", type: "normal" },
    { text: "Cada detalle tuyo es especial", type: "normal" },
    { text: "Deja de sobreestimarte, te mereces todas cosas buenas", type: "normal" },
    { text: "Sos de esas personas que suman posta con solo estar", type: "normal" },
    { text: "Valoro muchísimo lo auténtica que sos en un mundo de caretas", type: "normal" },
    { text: "El físico es anécdota, a mí lo que me flasheó fue tu esencia, quizá para muchos es diferente, pero alguien como vos es dificil encontrar", type: "normal" },
    { text: "Escucharte hablar de las cosas que te gustan es lindo, le pones un enfasis terrible", type: "normal" },
    { text: "Tenés un corazón de oro aunque a veces te hagas la brava", type: "normal" },
    { text: "Me hacés sonreír sin darte cuenta", type: "normal" },
    { text: "Es hermosa la cara de boluda tierna que ponés cuando te da vergüenza y te querés hacer la disimulada.", type: "normal" },
    { text: "Me gusta cómo se te arruga la nariz cuando te reís", type: "normal" },
    { text: "Tenes que hablar de todo lo que quieras, da igual los temas, se disfruta escucharte.", type: "normal" },
    { text: "Tenés una forma de reírte que te cambia toda la cara, te queda re bien.", type: "normal" },
    { text: "Disfruto muchísimo cuando coincidimos", type: "normal" },
    { 
        text: "Una disculpa por todo, sobre todo por hablar en sexual cuándo realmente te quería conocer de verdad... (tocame para leer más)", 
        type: "apology", 
        detail: "La verdad no me arrepiento de esto ni de haberte; lo único que me pesa es haberte hecho sentir presionada con expectativas. Lo único que sé es que tu compañía me hace bien y me causa cosas muy lindas." 
    },
    { text: "Entiendo perfectamente que necesitás tu espacio y lo entiendo", type: "normal" },
    { text: "Tengo ganas de compartir buenos momentos con vos", type: "normal" }
];


function handlePortalClick() {
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.play().catch(error => {
            console.log("Reproducción automática pendiente de interacción.");
        });
    }
    bloomFlowers();
}

// Función que dispara el botón de abajo a la derecha para generar más textos
function generateMoreTexts() {
    bloomFlowers();
}

function bloomFlowers() {
const gardenArea = document.getElementById('garden-area');    
    const totalItems = 8;
    const radius = window.innerWidth < 768 ? 125 : 270;

    const oldElements = document.querySelectorAll('.bloomed-element');
    oldElements.forEach(el => el.remove());

    const shuffled = [...messages].sort(() => 0.5 - Math.random());
    const selectedMessages = shuffled.slice(0, totalItems);

    for (let i = 0; i < totalItems; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'bloomed-element';

        const msgBox = document.createElement('div');
        const currentMsg = selectedMessages[i];
        
        msgBox.textContent = currentMsg.text;

        if (currentMsg.type === "apology") {
            msgBox.className = 'floating-message-box apology-card';
            msgBox.onclick = () => alert(currentMsg.detail);
        } else {
            msgBox.className = 'floating-message-box';
        }

        wrapper.appendChild(msgBox);

        const angle = (i * (360 / totalItems)) * (Math.PI / 180);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        wrapper.style.transform = `translate(${x}px, ${y}px) scale(0)`;
        
        gardenArea.appendChild(wrapper);

        setTimeout(() => {
            wrapper.classList.add('show');
            wrapper.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        }, i * 60);
    }
}