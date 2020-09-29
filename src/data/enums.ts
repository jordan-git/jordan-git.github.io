// Enum-like class for category objects
export class Category {
    static readonly HTML = new Category('HTML', '#e44d26').toObject();
    static readonly CSS = new Category('CSS', '#264de4').toObject();
    static readonly JavaScript = new Category(
        'JavaScript',
        '#264de4'
    ).toObject();
    static readonly TypeScript = new Category(
        'TypeScript',
        '#3178c6'
    ).toObject();
    static readonly Java = new Category('Java', '#e58f14').toObject();
    static readonly Python = new Category('Python', '#61dafb').toObject();
    static readonly JSON = new Category('JSON', '#466df4').toObject();
    static readonly SoftwareGUI = new Category(
        'SoftwareGUI',
        'grey'
    ).toObject();
    static readonly Express = new Category('Express', 'green').toObject();
    static readonly MySQL = new Category('MySQL', '#47809d').toObject();
    static readonly React = new Category('React', '#61dafb').toObject();
    static readonly Nodejs = new Category('Node.js', '#70a761').toObject();
    static readonly MongoDB = new Category('MongoDB', '#e58f14').toObject();

    private constructor(
        private readonly name: string,
        private readonly color: string
    ) {}

    toObject() {
        return { name: this.name, color: this.color };
    }
}
