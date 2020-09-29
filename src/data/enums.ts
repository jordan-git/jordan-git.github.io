// Enum-like class for category objects
export class Category {
    static readonly HTML = new Category('HTML', '#e44d26');
    static readonly CSS = new Category('CSS', '#264de4');
    static readonly JavaScript = new Category('JavaScript', '#264de4');
    static readonly TypeScript = new Category('TypeScript', '#3178c6');
    static readonly Java = new Category('Java', '#e58f14');
    static readonly Python = new Category('Python', '#61dafb');
    static readonly JSON = new Category('JSON', '#466df4');
    static readonly SoftwareGUI = new Category('SoftwareGUI', 'grey');
    static readonly Express = new Category('Express', 'green');
    static readonly MySQL = new Category('MySQL', '#47809d');
    static readonly React = new Category('React', '#61dafb');
    static readonly Nodejs = new Category('Node.js', '#70a761');
    static readonly MongoDB = new Category('MongoDB', '#e58f14');

    private constructor(
        private readonly name: string,
        public readonly color: any
    ) {}

    data() {
        return { name: this.name, color: this.color };
    }
}
