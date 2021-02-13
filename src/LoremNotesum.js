// Generate random notes data 
import { LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 7,
      min: 3
    },
    wordsPerSentence: {
      max: 8,
      min: 4
    }
  });

var rand = Math.floor(Math.random() * 10);
const titleCase = (phrase) => {
  return phrase[0].toUpperCase() + phrase.substring(1);
};

var note = {};
const notesData = [
    {noteid: "4a515947f41d9", title: "Dolore aliquip", body: "Tempor et anim ea cupidatat. Lorem esse ullamco cu… tempor elit eiusmod tempor exercitation aliquip.", created_at: "1612979380879", updated_at: ""},
    {noteid: "9d3f60df56471", title: "Ea sunt", body: "Lorem nostrud in dolore nulla eiusmod. Voluptate i…henderit id exercitation. Magna ea est ad labore.", created_at: "1612979380879", updated_at: ""},
    {noteid: "52c3842b67de5", title: "Dolor voluptate", body: "Minim et aute consectetur commodo commodo. Veniam …ollit proident consectetur laborum et incididunt.", created_at: "1612979380879", updated_at: ""},
    {noteid: "5120ed3f4cff7", title: "Aliquip culpa", body: "Adipisicing deserunt eiusmod incididunt adipisicin…rure. Irure ut non pariatur aliquip excepteur ad.", created_at: "1612979380879", updated_at: ""},
    {noteid: "c5446ae4f63c", title: "Do do", body: "Aliquip qui ullamco consequat ullamco mollit excep…ua adipisicing. In fugiat laborum ea veniam elit.", created_at: "1612979380879", updated_at: ""},
    {noteid: "470562f01afc8", title: "Laboris consequat", body: "Amet laborum tempor aliquip tempor consequat amet.… fugiat sit sit officia duis cupidatat consequat.", created_at: "1612979380879", updated_at: ""},
    {noteid: "aae102cbcb567", title: "Qui reprehenderit", body: "Non magna excepteur non culpa ullamco fugiat ad. A…mpor id proident. Eiusmod nostrud et sunt mollit.", created_at: "1612979380880", updated_at: ""},
    {noteid: "2846059522a45", title: "Dolor aute", body: "Exercitation sunt eiusmod elit reprehenderit excep…nulla dolore id culpa aute. Enim cillum ipsum ad.", created_at: "1612979380880", updated_at: ""},
    {noteid: "8b58c7ba1791b", title: "Elit in", body: "Commodo minim enim veniam ex nulla enim mollit. Te…enim consectetur id ad. Est excepteur enim id in.", created_at: "1612979380880", updated_at: ""},
    {noteid: "8448a06200bcb", title: "Nostrud consectetur", body: "Tempor nulla magna velit cillum aute duis adipisic…citation ea officia ipsum labore veniam non nisi.", created_at: "1612979380880", updated_at: ""},
    {noteid: "5e4725ade09bc", title: "Cupidatat do", body: "Consectetur ut eiusmod consectetur nulla adipisici…iat. Velit ex adipisicing nisi qui reprehenderit.", created_at: "1612979380880", updated_at: ""},
    {noteid: "f378c83155c0a", title: "Minim dolor", body: "Velit cillum cupidatat minim voluptate ex dolore. …um aliqua. Tempor esse sunt dolor adipisicing do.", created_at: "1612979380880", updated_at: ""},
    {noteid: "b4ed582e5fbd4", title: "Ex ex", body: "Nisi duis id consequat et aliqua. Sunt aliquip inc…esse ipsum in reprehenderit deserunt consectetur.", created_at: "1612979380880", updated_at: ""},
    {noteid: "bdee53246ae85", title: "Minim ad", body: "Amet officia magna amet. In mollit pariatur volupt…cupidatat eiusmod. Do minim proident non officia.", created_at: "1612979380880", updated_at: ""},
    {noteid: "140d49ddec1c1", title: "Aliquip deserunt", body: "Proident aliquip nostrud nisi. Occaecat dolore con…Et eiusmod labore dolor sunt qui proident veniam.", created_at: "1612979380880", updated_at: ""}
];
for (var i = 0; i < 15; i++) {
    note = {
        noteid: Math.random().toString(16).slice(2),
        title: titleCase(lorem.generateWords(rand)),
        body: lorem.generateParagraphs(rand),
        created_at: Math.round(Date.now()).toString(),
        updated_at: ""
      };
    //   notesData.push(note);
}
// End of Lorem Ipsum Note

export default  notesData