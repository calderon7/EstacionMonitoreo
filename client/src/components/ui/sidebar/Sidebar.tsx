
import { ContainerSidebar } from "../../../Global"
import NewPointMonitoring from "../../NewOrEditPointMonitoring/NewOrEditPointMonitoring"
import { IPropsSidebar } from "../ui.interface"

function Sidebar({ visible, setVisible, header, component, children, padding }: IPropsSidebar) {
    return (
      <ContainerSidebar
        $padding={padding}
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        header={header}
        closeOnEscape={false}
        style={{ width: '45%' }}
      >
        {children}
        {component === 'new-point-monitoring' && (
            <NewPointMonitoring setVisible={setVisible} />
        )}
      </ContainerSidebar>
    )
  }
  
  export default Sidebar
  