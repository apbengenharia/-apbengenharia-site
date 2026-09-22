const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const dialog = document.getElementById('service-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogCopy = document.getElementById('dialog-copy');
const closeButton = document.querySelector('.dialog-close');
const contactButton = document.getElementById('dialog-contact');

const details = {
  'Segurança de Barragens': 'Apoio técnico em inspeções, auditorias, documentação de segurança, acompanhamento de estruturas hidráulicas e análise das condições de operação e manutenção.',
  'Projetos em Estruturas': 'Projetos, revisão, dimensionamento, detalhamento e compatibilização de estruturas de concreto, aço e soluções especiais.',
  'Projetos em Instalações Elétricas e Hidráulicas': 'Desenvolvimento e compatibilização de instalações prediais e industriais, sistemas hidráulicos, elétricos e de apoio às infraestruturas.',
  'Coordenação Técnica de Obras': 'Coordenação, fiscalização, supervisão, gestão de interfaces, qualidade, prazo e apoio técnico à execução.',
  'Orçamento e Planejamento': 'Quantitativos, estimativas, medições, custos, cronogramas e acompanhamento físico-financeiro de projetos e obras.',
  'Meio Ambiente': 'Estudos, planos de gestão, resíduos, efluentes, monitoramento, mitigação, licenciamento e acompanhamento socioambiental.',
  'Saúde e Segurança do Trabalho': 'PSS, PGR, inspeções, auditorias, treinamentos, procedimentos, avaliação de riscos e resposta a emergências.',
  'Saneamento e Infraestruturas Hidráulicas': 'Abastecimento de água, adutoras, redes, reservatórios, drenagem, esgotamento, estações e infraestruturas associadas.',
  'Estudos e Projetos de Infraestrutura': 'Levantamentos, topografia, vias, drenagem, urbanização, estudos de campo, projeto e compatibilização.',
  'Consultoria Técnica': 'Pareceres, análise técnica, revisão de documentos, due diligence, apoio contratual e soluções de engenharia sob medida.'
};

function openService(name) {
  if (!dialog || !dialogTitle || !dialogCopy) return;
  dialogTitle.textContent = name;
  dialogCopy.textContent = details[name] || '';
  if (typeof dialog.showModal === 'function') dialog.showModal();
}

document.querySelectorAll('.service-more').forEach(btn => {
  btn.addEventListener('click', () => openService(btn.dataset.service));
});

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const btn = card.querySelector('.service-more');
      if (btn) {
        e.preventDefault();
        openService(btn.dataset.service);
      }
    }
  });
});

if (closeButton && dialog) closeButton.addEventListener('click', () => dialog.close());
if (contactButton && dialog) contactButton.addEventListener('click', () => dialog.close());
if (dialog) dialog.addEventListener('click', e => {
  const box = dialog.getBoundingClientRect();
  if (e.clientX < box.left || e.clientX > box.right || e.clientY < box.top || e.clientY > box.bottom) dialog.close();
});
