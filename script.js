(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const dialog = document.querySelector('#service-dialog');
  const dialogTitle = document.querySelector('#dialog-title');
  const dialogCopy = document.querySelector('#dialog-copy');
  const close = document.querySelector('.dialog-close');

  const details = {
    'Segurança de Barragens': 'Inspeções, auditorias, planos de segurança, avaliação documental e acompanhamento técnico de estruturas hidráulicas.',
    'Projetos em Estruturas': 'Concepção, dimensionamento, detalhamento, revisão e compatibilização de estruturas.',
    'Projetos em Instalações Elétricas e Hidráulicas': 'Projetos prediais e industriais de sistemas elétricos e hidráulicos, captação, tratamento, reserva e distribuição de água.',
    'Coordenação Técnica de Obras': 'Supervisão, fiscalização, gestão de interfaces e apoio técnico à execução de obras.',
    'Orçamento e Planejamento': 'Estimativas, quantitativos, medições e planejamento físico-financeiro de projetos e obras.',
    'Meio Ambiente': 'Estudos ambientais, planos de gestão, licenciamento, monitoramento e acompanhamento socioambiental.',
    'Saúde e Segurança do Trabalho': 'PSS, PGR, inspeções, auditorias, treinamentos, gestão de riscos e conformidade legal.',
    'Saneamento e Infraestruturas Hidráulicas': 'Sistemas de abastecimento de água, adutoras, redes, reservatórios, drenagem e esgotamento.',
    'Estudos e Projetos de Infraestrutura': 'Estudos de campo, vias de acesso, drenagem, urbanização, topografia e obras complementares.',
    'Consultoria Técnica': 'Pareceres, análise técnica, due diligence, apoio contratual e revisão de documentos.'
  };

  document.querySelectorAll('.service-more').forEach((button) => {
    button.addEventListener('click', () => {
      if (!dialog) return;
      const service = button.dataset.service || 'Serviço';
      if (dialogTitle) dialogTitle.textContent = service;
      if (dialogCopy) dialogCopy.textContent = details[service] || 'Entre em contato com a APB para mais informações.';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });

  if (close && dialog) close.addEventListener('click', () => dialog.close());
  if (dialog) dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
