import { useParams } from "react-router-dom"
import { ScrollArea } from "../../components/ui/scroll-area";

function IssueDetails() {
    const {projectId, issueId} = useParams();
  return (
    <div className="px-20 py-8 text-gay-400">

        <div className="flex justify-between border p-10 rounded-sm bg-primary-foreground">
            <ScrollArea className='h-[80vh] w-[60vh]'>
                <div>
                    <h1 className="text-lg font-semibold text-primary">Criar Navbar</h1>

                    <div className="py-5"> 
                        <h2 className="font-semibold text-gray-400">Descrição</h2>
                        <p className="text-gray-400 text-sm mt-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ut, eos cupiditate, quisquam expedita modi earum culpa, libero accusantium magnam ipsam nobis aspernatur beatae eveniet ratione! Obcaecati esse dolore labore.</p>
                    </div>

                    <div className="mt-5">
                        <h1>Atividade</h1>
                    </div>
                </div>
            </ScrollArea>
        </div>
      
    </div>
  )
}

export default IssueDetails