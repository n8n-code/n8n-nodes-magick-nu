import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { strategiesDescription } from './resources/strategies';

export class MagickNu implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Magick Nu',
                name: 'N8nDevMagickNu',
                icon: { light: 'file:./magick-nu.png', dark: 'file:./magick-nu.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API access requires username and password authentication.',
                defaults: { name: 'Magick Nu' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMagickNuApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Strategies",
					"value": "Strategies",
					"description": ""
				}
			],
			"default": ""
		},
		...strategiesDescription
                ],
        };
}
