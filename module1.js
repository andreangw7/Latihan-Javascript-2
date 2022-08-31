new gridjs.Grid({
  columns: ['Nama', 'Email'],
  data: [
    ['Andrean George', 'andreangeorge@gmail.com'],
    ['Haykal', 'haykaltrenggonop@gmail.com'],
  ],
}).render(document.getElementById('table-gridjs'));

export { columns };
