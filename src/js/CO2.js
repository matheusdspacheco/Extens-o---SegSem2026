async function atualizarBadgeCO2() {
  const badge = document.querySelector('.badge');
  if (!badge) return;

  // Mostra um estado de carregamento enquanto busca
  badge.innerHTML = `Carregando CO₂... · Urgência Climática`;

  try {
    const response = await fetch('https://climatemonitor.info/api/public/v1/co2/latest');
    
    if (!response.ok) throw new Error('Erro na API');

    const json = await response.json();
    const co2 = json.data.value.toFixed(1); // ex: 426.8
    const data = json.data.label;           // ex: 2026-10-24

    // Formata a data para o padrão brasileiro (opcional)
    const [ano, mes, dia] = data.split('-');
    const dataFormatada = `${dia}/${mes}/${ano}`;

    badge.innerHTML = `
      CO₂ atual: <strong>${co2} ppm</strong> · ${dataFormatada}
    `;

  } catch (error) {
    console.error('Erro ao buscar nível de CO₂:', error);
    // Fallback caso a API falhe
    badge.textContent = 'Campanha 2026 · Urgência Climática';
  }
}

// Executa quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
  atualizarBadgeCO2();
});