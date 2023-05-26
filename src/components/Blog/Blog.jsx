import Hook from "../Hooks/Hooks";

const Blog = () => {
	Hook('Blog');
	return (
		<section className='dark:bg-gray-800 dark:text-gray-100'>
			<div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
				<h2 className='text-2xl font-semibold sm:text-4xl'>
					Frequently Asked Questions
				</h2>
				<p className='mt-4 mb-8 dark:text-gray-400'>
					Sagittis tempor donec id vestibulum viverra. Neque condimentum primis
					orci at lacus amet bibendum.
				</p>
				<div className='space-y-4'>
					<details className='w-full border rounded-lg'>
						<summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
							What is an access token and refresh token? How do they work and
							where should we store them on the client-side?
						</summary>
						<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
							Access Token: An access token is a credential that represents the
							authorization granted to a user. It is typically a string of
							characters. It is issued by an authentication server after the
							user successfully logs in or authenticates. The access token is
							usually short-lived and has an expiration time. It is used to
							access protected resources or perform authorized actions on behalf
							of the user. The server verifies the access token to ensure the
							user has the necessary permissions for the requested operation.{' '}
							<br />
							Refresh Token: A refresh token is a credential used to obtain a
							new access token without the need for the user to re-authenticate.
							It is issued alongside the access token during the authentication
							process. Unlike access tokens, refresh tokens have a longer
							expiration time and are securely stored on the client-side. When
							the access token expires, the client can use the refresh token to
							request a new access token from the authentication server. This
							process helps improve security since the access token is
							short-lived, reducing the impact of a compromised access token.
						</p>
					</details>
					<details className='w-full border rounded-lg'>
						<summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
							Compare SQL and NoSQL databases?
						</summary>
						<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
							SQL Databases: Data Model: SQL databases use a structured data
							model based on tables with predefined schemas, where data is
							organized in rows and columns. Each table represents an entity,
							and relationships between tables are defined through keys (e.g.,
							primary keys, foreign keys). Query Language: SQL (Structured Query
							Language) is a standard language used to manage and manipulate
							data in SQL databases. It provides a declarative syntax for
							querying, inserting, updating, and deleting data. Schema: SQL
							databases enforce a rigid schema, where the structure and data
							types of the data must be defined in advance. Changes to the
							schema may require altering the table structure. Scalability: SQL
							databases generally scale vertically by increasing the hardware
							resources of a single server. Scaling horizontally across multiple
							servers can be challenging due to strict schema constraints and
							data consistency requirements. <br />
							NoSQL Databases: Data Model: NoSQL databases use a variety of data
							models, including key-value, document, columnar, and graph. Each
							data model offers different ways to store and retrieve data,
							providing flexibility for various use cases. Query Language: NoSQL
							databases often have their own query languages specific to the
							data model they use. Some NoSQL databases also support SQL-like
							query languages for compatibility and ease of use. Schema: NoSQL
							databases are schema-less or schema-flexible, allowing for dynamic
							and evolving data structures. Each document or record can have a
							different structure without strict schema constraints.
							Scalability: NoSQL databases are designed for horizontal
							scalability. They can distribute data across multiple servers,
							allowing for easy scaling to handle large volumes of data and high
							traffic loads.
						</p>
					</details>
					<details className='w-full border rounded-lg'>
						<summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
							What is express js? What is Nest JS
						</summary>
						<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
							Express.js is a popular web application framework for Node.js,
							which is designed to simplify the process of building web
							applications and APIs. It provides a minimalistic, unopinionated
							approach, allowing developers to have fine-grained control over
							their applications structure and behavior. <br />
							Routing: Express.js provides a flexible routing system that allows
							developers to define routes for different HTTP methods (GET, POST,
							PUT, DELETE, etc.) and handle requests to specific URLs.
							Middleware: Middleware functions in Express.js enable developers
							to add additional functionality to the request-response cycle. It
							can be used for tasks such as logging, authentication, error
							handling, parsing request bodies, and more. <br />
							Nest.js, on the other hand, is a progressive Node.js framework for
							building scalable and maintainable server-side applications. It is
							built with TypeScript and incorporates ideas and concepts from
							various frameworks, including Angular, Express.js, and more.{' '}
							<br />
							TypeScript and Decorators: Nest.js leverages TypeScript, which
							provides static typing and enhances the development experience. It
							also utilizes decorators to define modules, controllers, services,
							and more, promoting modular and structured application
							development. Dependency Injection: Nest.js utilizes dependency
							injection to manage the creation and sharing of application
							components. This makes it easier to write modular and testable
							code, as dependencies can be easily injected into the components.
							MVC Architecture: Nest.js follows the Model-View-Controller (MVC)
							architectural pattern, where controllers handle requests, services
							encapsulate business logic, and modules organize related
							components. This promotes code organization and separation of
							concerns.
						</p>
					</details>
					<details className='w-full border rounded-lg'>
						<summary className='px-4 py-6 focus:outline-none focus-visible:ring-violet-400'>
							What is MongoDB aggregate and how does it work?
						</summary>
						<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
							In MongoDB, the aggregate operation is a powerful and flexible
							tool for performing data aggregation and analysis on collections.
							It allows you to process and transform documents within a
							collection to generate computed results based on specified
							criteria. The aggregate operation uses a pipeline approach, where
							you can define a sequence of stages that manipulate the documents
							as they flow through the pipeline. Each stage performs a specific
							operation on the input documents and passes the transformed result
							to the next stage.
						</p>
					</details>
				</div>
			</div>
		</section>
	);
};

export default Blog;
