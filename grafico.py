import matplotlib.pyplot as plt

# Dados extraídos
periodo = [1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]
ppm = [1636.56, 1645.01, 1657.37, 1670.21, 1682.81, 1693.3, 1704.62, 1714.57, 1724.96, 1735.45, 1736.54, 1742.15, 1748.9, 1751.34, 1754.58, 1765.69, 1772.35, 1773.2, 1771.32, 1772.72, 1777.35, 1777.1, 1774.29, 1774.99, 1781.41, 1787.1, 1793.58, 1798.95, 1803.09, 1808.15, 1813.48, 1822.72, 1834.3, 1843.25, 1849.68, 1857.45, 1866.7, 1878.94, 1895.0, 1911.13, 1921.55, 1929.53, 1936.08, 1938.15]

# Criar o gráfico
plt.figure(figsize=(10, 5))
plt.plot(periodo, ppm, marker='+', color='y', linestyle='-', linewidth=2)

# Personalização
plt.title('Média CH₄ por Ano (1983-2026)', fontsize=14, fontweight='bold')
plt.xlabel('Período (Ano)', fontsize=12)
plt.ylabel('CH₄ (Partículas por Milhão)', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.6)
plt.xticks(periodo, rotation=45)

# Guardar e exibi-lo
plt.tight_layout()
plt.show()