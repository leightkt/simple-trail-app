
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trails').del()
    .then(function () {
      // Inserts seed entries
      return knex('trails').insert([
        {
          name: 'Bierstadt',
          url: 'https://www.14ers.com/route.php?route=bier1&peak=Mt.+Bierstadt',
          thumbUrl: 'https://www.14ers.com/photos/evansgroup/rt_bier1.jpg',
          length: 7,
          elevationGain: 2850,
          description: 'Mount Bierstadt is a 14,065-foot-high mountain summit in the Front Range of the Rocky Mountains, in the U.S. state of Colorado. The fourteener is located in the Mount Evans Wilderness of Pike National Forest, 9.4 miles south by east of the Town of Georgetown in Clear Creek County.'
        }, {
          name: 'Shavano',
          url: 'https://www.14ers.com/route.php?route=shav1',
          thumbUrl: 'https://www.14ers.com/photos/shavanogroup/rt_shav1.jpg',
          length: 9,
          elevationGain: '4600',
          description: 'Mount Shavano is a high mountain summit in the southern Sawatch Range of the Rocky Mountains of North America. The 14,231-foot fourteener is located in San Isabel National Forest, 6.5 miles north by west of the community of Maysville in Chaffee County, Colorado, United States.'
        }, {
          name: 'Handies',
          url: 'https://www.14ers.com/route.php?route=hand1',
          thumbUrl: 'https://www.14ers.com/photos/handiespeak/rt_hand1.jpg',
          length: 7.5,
          elevationGain: 2800,
          description: 'Handies Peak is a high and prominent mountain summit of the San Juan Mountains range in the Rocky Mountains of North America.'
        }
      ]);
    });
};
