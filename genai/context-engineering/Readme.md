 context window ?

 An LLM process input as a sequence of tokens 
 it is maximum number of token the model can consider at once 


 Context Types:
  1) System message --> Define the persona , role and rules  --> you are a email assistant 
  2) User prompt -> Direct user input --> "Summarize the article"
  3) Conversational History  --> Memory of previous messages --> prior chat turns
  4) External content -> Injected knowledge RAG, Tool -> Docs, search snippet 
  5) Tool content -> Structure input/output from tools  -- JSON response, schema 



  python3 -c "from openai import OpenAI; print('Import successful')"

  curl https://api.openai.com/v1/models/gpt-5 \
  -H "Authorization: Bearer $OPENAI_API_KEY"

  https://platform.openai.com/docs/api-reference/introduction