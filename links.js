const links = [
	{
		"name": "Clearing",
		"dir": "clearing",
		"links": [
			{
				"title": "Clearing",
				"file": "clearing"
			},
		]
	},
	{
		"name": "Basics of working with meshes",
		"dir": "mesh",
		"links": [
			{
				"title": "Creating and deleting",
				"file": "mesh"
			},
		]
	},
	{
		"name": "Mesh geomerty",
		"dir": "meshShape",
		"links": [
			{
				"title": "Drawing 1 triangle",
				"file": "shapeXY"
			},
			{
				"title": "Drawing 2 traingles",
				"file": "shapeXY2"
			},
			{
				"title": "Indexed vertices",
				"file": "shapeIndices"
			},
			{
				"title": "Triangle strips",
				"file": "shapeTriStrip"
			},
			{
				"title": "Triangle fans",
				"file": "shapeTriFan"
			},
			{
				"title": "Every primitive type",
				"file": "shapePrimitiveTypes"
			},
			{
				"title": "Interrupting traingle strips/fans, line strips/loops",
				"file": "shapeRestartIndex"
			},
		]
	},
	{
		"name": "Mesh colors",
		"dir": "meshColors",
		"links": [
			{
				"title": "Vertex colors",
				"file": "colorRGB"
			},
			{
				"title": "Vertex colors with transparency",
				"file": "colorRGBA"
			},
		]
	},
	{
		"name": "Common mistakes that make meshes undrawable",
		"dir": "meshMistakes",
		"links": [
			{
				"title": "Missing vertex positions",
				"file": "mistakeNoPositions"
			},
			{
				"title": "Length mismatch when setting",
				"file": "mistakeLengthMismatchEarly"
			},
			{
				"title": "Length mismatch of different properties",
				"file": "mistakeLengthMismatchLate"
			},
		]
	},
	{
		"name": "Mesh textures",
		"dir": "meshTextures",
		"links": [
			{
				"title": "Textures and UVs",
				"file": "texturesUV"
			},
			{
				"title": "UV out of bounds",
				"file": "texturesUVOutOfBounds"
			},
			{
				"title": "UV offset and scrolling textures",
				"file": "texturesUVOffset"
			},
			{
				"title": "UV precision issues",
				"file": "texturesUVOffsetTooBig"
			},
		]
	},
	{
		"name": "Transforms",
		"dir": "transforms",
		"links": [
			{
				"title": "Using scratch coordinate system",
				"file": "scratchCoords1"
			},
			{
				"title": "Using scratch coordinate system with other transforms",
				"file": "scratchCoords2"
			},
			{
				"title": "Using -1 to 1 with aspect ratio correction",
				"file": "normCoords1"
			},
			{
				"title": "Adding Z dimensions, but it's cut-off",
				"file": "normCoords2"
			},
			{
				"title": "Simple, but ugly solution",
				"file": "normCoords3"
			},
			{
				"title": "Built-in solution: orthographic projection block for 2D",
				"file": "normCoords4"
			},
			{
				"title": "Perspective projection for 3D",
				"file": "perspective1"
			},
			{
				"title": "Moving the mesh in 3D",
				"file": "perspective2"
			},
			{
				"title": "Moving the camera in 3D",
				"file": "perspective3"
			},
			{
				"title": "Rotating the camera in 3D",
				"file": "perspective4"
			},
			{
				"title": "Incorrectly rotating the camera in 3D",
				"file": "perspective5"
			},
			{
				"title": "Moving both the mesh and the camera. Drawing the mesh in multiple locations at once",
				"file": "perspective6"
			},
			{
				"title": "Adding mesh rotation",
				"file": "perspective7"
			},
			{
				"title": "Simplifying code with a 'wrapper' block",
				"file": "perspective8"
			},
			{
				"title": "Futher simplifying code with 'configure transformation' blocks",
				"file": "perspective9"
			},
		]
	},
	{
		"name": "Manual transforms",
		"dir": "manualTransforms",
		"links": [
			{
				"title": "Preparations",
				"file": "setup"
			},
			{
				"title": "Getting world coordinates of a point on a transformed mesh",
				"file": "posModelToWorld"
			},
			{
				"title": "Getting scratch on-screen coordinates of a point on a transformed mesh",
				"file": "posModelToScratch"
			},
			{
				"title": "Getting absolute in-world direction of direction provided in the model space",
				"file": "dirModelToWorld"
			},
			{
				"title": "Implementing simple 4-directional first person movement",
				"file": "controllerSimple"
			},
			{
				"title": "Implementing 6-directional movement",
				"file": "controllerSixDir"
			},
		]
	},
	{
		"name": "Importing models from files",
		"dir": "import",
		"links": [
			{
				"title": "Importing example",
				"file": "import4"
			},
			{
				"title": "Transforming imported meshes",
				"file": "importTransform"
			},
		]
	},
	{
		"name": "Animated textures",
		"dir": "meshTextureAnimated",
		"links": [
			{
				"title": "Changing texture directly (DON'T DO THIS!)",
				"file": "uploadEveryFrame"
			},
			{
				"title": "Pre-creating multiple meshes that all inherit from the same base mesh",
				"file": "inheritShapeCustomTexture"
			},
			{
				"title": "Storing textures in meshes and using inheritance to switch between textures",
				"file": "inheritTexture"
			},
			{
				"title": "Directly changing UV offset",
				"file": "directUVoffset"
			},
			{
				"title": "Inherited UV offset",
				"file": "inheritUVoffset"
			},
		]
	},
	{
		"name": "Common mistakes while loading textures",
		"dir": "meshTextureLoading",
		"links": [
			{
				"title": "Blocked by CORS",
				"file": "textureCORS"
			},
			{
				"title": "What is [texture data] anyways?",
				"file": "texturePassing"
			},
		]
	},
	{
		"name": "Modifying parts of the mesh lists",
		"dir": "partialUpdate",
		"links": [
			{
				"title": "Updating vertex data",
				"file": "vertex1"
			},
			{
				"title": "Updating vertex index data",
				"file": "index1"
			},
			{
				"title": "Updating instance data",
				"file": "instance1"
			},
			{
				"title": "Inserting and removing triangles example",
				"file": "index2"
			},
		]
	},
	{
		"name": "Simple3D + Skins extension",
		"dir": "extSkins",
		"links": [
			{
				"title": "Simple text skins",
				"file": "textSimple"
			},
			{
				"title": "Textured text skins with gradient",
				"file": "textTextured"
			},
			{
				"title": "Turning 2D costumes into pre-rendered 3D block skins",
				"file": "blocks"
			},
		]
	},
	{
		"name": "Simple3D + Pen+ extension",
		"dir": "extPenPlus",
		"links": [
			{
				"title": "Using transformation blocks with Pen+ v7 shaders",
				"file": "v7"
			},
			{
				"title": "Using transformation blocks with Pen+ v6 textured triangle blocks",
				"file": "v6"
			},
		]
	},
	{
		"name": "Simple3D + Augmented Reality extension",
		"dir": "extAR",
		"links": [
		]
	}
];
