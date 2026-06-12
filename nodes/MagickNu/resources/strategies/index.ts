import type { INodeProperties } from 'n8n-workflow';

export const strategiesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Strategies"
					]
				}
			},
			"options": [
				{
					"name": "Get Strategies Templates",
					"value": "Get Strategies Templates",
					"action": "Get all Template Strategies",
					"description": "Get all Template Strategies",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/strategies/templates"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /strategies/templates",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Strategies"
					],
					"operation": [
						"Get Strategies Templates"
					]
				}
			}
		},
];
