
const NI = [
  [
    "Dentista",
    "Paciente pesquisa antes de marcar.",
    ["Especialidades", "Convênios", "Agendamento"],
  ],
  [
    "Clínica de estética",
    "Ticket alto e cliente que compara antes.",
    ["Procedimentos", "Antes e depois", "Parcelamento"],
  ],
  [
    "Advocacia",
    "Credibilidade decide a contratação.",
    ["Áreas de atuação", "Sobre o escritório", "Contato"],
  ],
  [
    "Oficina mecânica",
    "Busca de urgência no Google.",
    ["Serviços", "Marcas atendidas", "WhatsApp em destaque"],
  ],
  [
    "Barbearia",
    "Concorrência alta no bairro.",
    ["Serviços com preço", "Equipe", "Agendamento"],
  ],
  [
    "Personal trainer",
    "Precisa parecer profissional para cobrar mais.",
    ["Planos", "Resultados de alunos", "Avaliação gratuita"],
  ],
  [
    "Contabilidade",
    "Cliente empresa espera estrutura.",
    ["Serviços por tipo de empresa", "Diferenciais", "Proposta"],
  ],
  [
    "Corretor de imóveis",
    "Precisa mostrar imóveis fora do Instagram.",
    ["Imóveis em destaque", "Regiões", "WhatsApp"],
  ],
  [
    "Clínica veterinária",
    "Emergência pesquisada na hora.",
    ["Atendimento 24h", "Serviços", "Equipe"],
  ],
  [
    "Espaço de eventos",
    "Cliente quer ver o lugar antes de visitar.",
    ["Galeria", "Capacidade", "Tipos de evento"],
  ],
  [
    "Pizzaria",
    "Cliente decide pelo cardápio e quer pedir rápido.",
    ["Cardápio com preços", "Pedido pelo WhatsApp", "Área de entrega"],
  ],
  [
    "Hamburgueria",
    "Cliente compara as opções e pede pelo celular.",
    [
      "Cardápio com fotos e preços",
      "Pedido pelo WhatsApp",
      "Combos e promoções",
    ],
  ],
];
const nb = document.getElementById("nich"),
  np = document.getElementById("np");
function pick(i) {
  const [n, w, l] = NI[i];
  nb.querySelectorAll("button").forEach((b, j) =>
    b.setAttribute("aria-pressed", j === i),
  );
  np.classList.remove("sw");
  void np.offsetWidth;
  np.classList.add("sw");
  np.innerHTML =
    "<div><h3>Por que ter um site</h3><p>" +
    w +
    "</p></div><div><h3>O que o seu site precisa ter</h3><ul>" +
    l.map((x) => "<li>" + x + "</li>").join("") +
    "</ul></div>";
  const a = document.createElement("a");
  a.className = "btn";
  a.target = "_blank";
  a.rel = "noopener";
  a.href = wa(
    "Olá! Vim pelo site da BrasTech Code e quero um site para " +
      n.toLowerCase() +
      ".",
  );
  a.textContent = "Quero um site para " + n.toLowerCase();
  np.appendChild(a);
}
NI.forEach(([n], i) => {
  const b = document.createElement("button");
  b.textContent = n;
  b.onclick = () => pick(i);
  nb.appendChild(b);
});
pick(0);