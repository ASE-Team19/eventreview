define([
  'app'
], function (app) {
  'use strict';

  app.service('dataService', [
    function () {
      function fetchEvents() {
        var events = [];
        database.ref('events').once('value').then(function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var data = childSnapshot.val();
            data.id = childSnapshot.key;
            events.push(data);
          });
        });
        return events;
      }

      this.events = fetchEvents();

      /*this.events = [{
        id: 1,
        name: 'Special Event',
        city: 'Grevenbroich',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 2,
        name: 'Special Event',
        city: 'Straußfurt',
        district: 'Erfurt',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 3,
        name: 'Special Event',
        city: 'Gebesee',
        district: 'Erfurt',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 4,
        name: 'Special Event',
        city: 'Grevenbroich',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 5,
        name: 'Special Event',
        city: 'Schwabhausen',
        district: 'Erfurt',
        street: 'Frühlingsstraße',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 6,
        name: 'Science Event',
        city: 'Hachelbich',
        district: 'Kyffhäuserland',
        street: 'Oberdorf',
        number: '10',
        zip: '99707',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 7,
        name: 'Science Event',
        city: 'Berka',
        district: 'Sondershausen',
        street: 'Wittchental',
        number: '10',
        zip: '99706',
        dates: [
          'Monday: 10:00 AM',
          'Sunday: 9:30 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 8,
        name: 'Science Event',
        city: 'Roßla',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 9,
        name: 'Science Event',
        city: 'Kelbra',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 10,
        name: 'Science Event',
        city: 'Tilleda',
        district: 'Sangerhausen',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 11,
        name: 'Sport Event',
        city: 'Neuss',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 12,
        name: 'Sport Event',
        city: 'Krefeld',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 13,
        name: 'Sport Event',
        city: 'Kempen',
        district: 'Düsseldorf',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 14,
        name: 'Sport Event',
        city: 'Mühlheim an der Ruhr',
        district: 'Duisburg',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 15,
        name: 'Sport Event',
        city: 'Kreuzberg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 16,
        name: 'Sport Event',
        city: 'Charlottenburg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 17,
        name: 'Sport Event',
        city: 'Schöneberg',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 18,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 19,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 20,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 21,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 22,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 23,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 24,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 25,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 26,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 27,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 28,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 29,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }, {
        id: 30,
        name: 'Sport Event',
        city: 'Marzahn',
        district: 'Berlin',
        street: 'Kurt-Schumacher-Str',
        number: '17',
        zip: '41515',
        dates: [
          'Monday: 9:00 AM',
          'Sunday: 9:00 AM'
        ],
        contact: {
          tel: '1234/56789',
          email: 'test@example.com'
        },
        website: 'http://example.com'
      }];*/

      this.pages = [{
        alias: 'impress',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Impress',
        icon: 'ion-information-circled'
      }, {
        alias: 'contact',
        content: '<h1>HTML Ipsum Presents</h1> <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p> <h2>Header Level 2</h2> <ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ol> <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote> <h3>Header Level 3</h3> <ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li> </ul>',
        title: 'Contact',
        icon: 'ion-paper-airplane'
      }];
    }
  ]);
});
