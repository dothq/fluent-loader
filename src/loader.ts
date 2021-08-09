const loader = (source: string) => {
    return `
        import { FluentBundle, FluentResource, FluentVariable } from '@fluent/bundle';

        export class L10n extends FluentBundle {
            constructor(props) {
                super(props);
            }
        
            format(id, vars) {
                const message = this.getMessage(id);
        
                if(message && message.value) {
                    return this.formatPattern(
                        message.value,
                        vars
                    )
                } else {
                    return null;
                }
            }
        }

        const resource = new FluentResource(\`${source}\`);

        const bundle = new L10n("en-US");
        bundle.addResource(resource);

        export default bundle;
    `;
}

export default loader;